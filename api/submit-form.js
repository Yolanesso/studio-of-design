import TelegramBot from 'node-telegram-bot-api';

// Функция для форматирования сообщения
function formatMessage(formData) {
  const timestamp = new Date().toLocaleString('ru-RU', {
    timeZone: 'Europe/Moscow',
    dateStyle: 'short',
    timeStyle: 'medium'
  });

  return `🔔 *Новая заявка с сайта*

📅 *Дата:* ${timestamp}

👤 *Имя:* ${formData.name}
📍 *Локация:* ${formData.location}
📞 *Телефон:* ${formData.phone}
📧 *Email:* ${formData.email}

💬 *Сообщение:*
${formData.message || 'Не указано'}

✅ *Согласие на обработку данных:* ${formData.consent ? 'Да' : 'Нет'}`;
}

export default async function handler(req, res) {
  // Разрешаем только POST запросы
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Method not allowed' 
    });
  }

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Обработка preflight запросов
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const formData = req.body;

    // Валидация данных
    if (!formData.name || !formData.location || !formData.phone || !formData.email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Все обязательные поля должны быть заполнены' 
      });
    }

    // Получаем переменные окружения
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error('❌ TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID должны быть установлены');
      return res.status(500).json({ 
        success: false, 
        message: 'Ошибка конфигурации сервера' 
      });
    }

    // Инициализация бота
    const bot = new TelegramBot(botToken, { polling: false });

    // Отправляем сообщение в Telegram
    const message = formatMessage(formData);
    
    try {
      // Пробуем отправить с Markdown, если не получается - отправляем без форматирования
      try {
        await bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
        console.log('✅ Уведомление отправлено в Telegram');
      } catch (markdownError) {
        // Если ошибка с Markdown, отправляем без форматирования
        const plainMessage = formatMessage(formData).replace(/\*/g, '');
        await bot.sendMessage(chatId, plainMessage);
        console.log('✅ Уведомление отправлено в Telegram (без форматирования)');
      }
    } catch (telegramError) {
      console.error('❌ Ошибка отправки в Telegram:', telegramError.message);
      
      // Более детальная обработка ошибок
      if (telegramError.response?.body?.error_code === 400) {
        console.error('💡 Подсказка: Убедитесь, что вы написали боту команду /start');
      }
      
      return res.status(500).json({ 
        success: false, 
        message: 'Ошибка отправки уведомления. Убедитесь, что вы написали боту /start' 
      });
    }

    // Отправляем успешный ответ
    return res.status(200).json({ 
      success: true, 
      message: 'Заявка успешно отправлена!' 
    });

  } catch (error) {
    console.error('❌ Ошибка обработки заявки:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Внутренняя ошибка сервера' 
    });
  }
}

