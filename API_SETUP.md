# Настройка API для отправки форм

## Проблема

Если при отправке формы возникает ошибка, скорее всего форма не может найти сервер с ботом.

## Решение

### Вариант 1: Использование отдельного сервера с ботом (рекомендуется)

1. **Убедитесь, что бот запущен на сервере:**
   ```bash
   cd ~/studio-of-design/server
   pm2 status
   ```

2. **Узнайте URL вашего сервера:**
   - Если у вас есть домен: `https://your-domain.com`
   - Если только IP: `http://your-server-ip:3001`
   - Если сервер за Nginx: `https://api.your-domain.com`

3. **Настройте переменную окружения для фронтенда:**

   **Для Vercel:**
   - Зайдите в настройки проекта на Vercel
   - Перейдите в Settings → Environment Variables
   - Добавьте переменную:
     - Name: `VITE_API_URL`
     - Value: `https://your-server.com` (или `http://your-ip:3001`)
   - Пересоберите проект

   **Для локальной разработки:**
   - Создайте файл `.env` в корне проекта (рядом с `package.json`)
   - Добавьте строку:
     ```
     VITE_API_URL=http://localhost:3001
     ```

### Вариант 2: Использование Vercel Serverless функции

Если вы хотите использовать serverless функцию на Vercel вместо отдельного сервера:

1. Убедитесь, что файл `api/submit-form.js` существует
2. Настройте переменные окружения на Vercel:
   - `TELEGRAM_BOT_TOKEN` - токен бота
   - `TELEGRAM_CHAT_ID` - ваш Chat ID
3. Не указывайте `VITE_API_URL` - форма будет использовать относительный путь `/api/submit-form`

## Проверка работы

1. **Проверьте доступность сервера:**
   ```bash
   curl http://your-server:3001/api/health
   ```
   Должен вернуться: `{"status":"ok","message":"Server is running"}`

2. **Проверьте CORS:**
   Откройте консоль браузера (F12) и проверьте, нет ли ошибок CORS

3. **Проверьте логи бота:**
   ```bash
   pm2 logs telegram-bot-server
   ```

## Типичные ошибки

### "Failed to fetch" или "NetworkError"
- Сервер недоступен
- Неправильный URL в `VITE_API_URL`
- Проблемы с сетью/firewall

### "CORS error"
- Проверьте настройки CORS на сервере (должно быть `app.use(cors())`)
- Убедитесь, что сервер разрешает запросы с вашего домена

### "404 Not Found"
- Неправильный URL endpoint
- Сервер не запущен
- Неправильный путь к API

### "500 Internal Server Error"
- Проверьте логи сервера: `pm2 logs telegram-bot-server`
- Убедитесь, что `.env` файл настроен правильно
- Проверьте, что бот получил команду `/start` в Telegram

## Пример настройки для разных окружений

### Локальная разработка
```env
# .env в корне проекта
VITE_API_URL=http://localhost:3001
```

### Production с отдельным сервером
```env
# На Vercel: Environment Variables
VITE_API_URL=http://79.141.79.158:3001
# или если есть домен:
# VITE_API_URL=https://api.your-domain.com
```

### Production с Vercel Serverless
```env
# Не указывайте VITE_API_URL
# Форма будет использовать /api/submit-form
```

