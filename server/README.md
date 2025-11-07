# Telegram Bot Server

Backend сервер для отправки уведомлений о новых заявках в Telegram.

## Установка

1. Установите зависимости:
```bash
npm install
```

2. Создайте файл `.env` на основе `.env.example`:
```bash
cp .env.example .env
```

3. Настройте переменные окружения в `.env`:
   - `TELEGRAM_BOT_TOKEN` - токен бота от @BotFather
   - `TELEGRAM_CHAT_ID` - ваш Chat ID (можно узнать у @userinfobot)

## Как получить токен бота

1. Откройте Telegram и найдите @BotFather
2. Отправьте команду `/newbot`
3. Следуйте инструкциям для создания бота
4. Скопируйте полученный токен в `.env` файл

## Как узнать Chat ID

1. Откройте Telegram и найдите @userinfobot
2. Отправьте команду `/start`
3. Бот вернет ваш Chat ID
4. Скопируйте Chat ID в `.env` файл

## Запуск

```bash
# Обычный режим
npm start

# Режим разработки с автоперезагрузкой
npm run dev
```

Сервер будет доступен на `http://localhost:3001`

## API Endpoints

### POST /api/submit-form
Принимает данные формы и отправляет уведомление в Telegram.

**Тело запроса:**
```json
{
  "name": "Имя",
  "location": "Локация",
  "phone": "+7 999 123 45 67",
  "email": "email@example.com",
  "message": "Сообщение",
  "consent": true
}
```

**Ответ:**
```json
{
  "success": true,
  "message": "Заявка успешно отправлена!"
}
```

### GET /api/health
Проверка работоспособности сервера.

