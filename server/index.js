import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';

// Загружаем переменные окружения
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Инициализация Telegram бота
const botToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

if (!botToken || !chatId) {
  console.error('❌ Ошибка: TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID должны быть установлены в .env файле');
  process.exit(1);
}

const bot = new TelegramBot(botToken, { polling: true });

// Обработчик команды /start - для инициализации чата
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '👋 Привет! Я готов получать уведомления о новых заявках с сайта.\n\nОтправьте /help для справки.');
  console.log(`✅ Пользователь ${chatId} начал диалог с ботом`);
});

// Обработчик команды /help
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '📋 Этот бот отправляет уведомления о новых заявках с сайта студии дизайна.\n\nВсе заявки будут автоматически приходить сюда.');
});

// Обработчик всех сообщений (для отладки)
bot.on('message', (msg) => {
  if (!msg.text?.startsWith('/')) {
    console.log(`📨 Получено сообщение от ${msg.chat.id}: ${msg.text}`);
  }
});

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

// Роут для получения заявок
app.post('/api/submit-form', async (req, res) => {
  try {
    const formData = req.body;

    // Валидация данных
    if (!formData.name || !formData.location || !formData.phone || !formData.email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Все обязательные поля должны быть заполнены' 
      });
    }

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
        console.error('💡 Найдите вашего бота в Telegram и отправьте ему /start');
      }
      
      return res.status(500).json({ 
        success: false, 
        message: 'Ошибка отправки уведомления. Убедитесь, что вы написали боту /start' 
      });
    }

    // Отправляем успешный ответ
    res.json({ 
      success: true, 
      message: 'Заявка успешно отправлена!' 
    });

  } catch (error) {
    console.error('❌ Ошибка обработки заявки:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Внутренняя ошибка сервера' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Функция для проверки соединения с ботом
async function testBotConnection() {
  try {
    const botInfo = await bot.getMe();
    console.log(`✅ Бот подключен: @${botInfo.username}`);
    
    // Пробуем отправить тестовое сообщение
    try {
      await bot.sendMessage(chatId, '✅ Бот успешно подключен и готов к работе!');
      console.log('✅ Тестовое сообщение отправлено успешно');
    } catch (testError) {
      console.warn('⚠️  Не удалось отправить тестовое сообщение');
      console.warn('💡 Найдите вашего бота в Telegram и отправьте ему команду /start');
      console.warn(`💡 Имя бота: @${botInfo.username}`);
    }
  } catch (error) {
    console.error('❌ Ошибка подключения к боту:', error.message);
  }
}

// Запуск сервера
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на порту ${PORT}`);
  console.log(`📱 Telegram бот готов к работе`);
  console.log(`💬 Chat ID: ${chatId}`);
  console.log('');
  
  // Проверяем соединение с ботом
  testBotConnection();
});

