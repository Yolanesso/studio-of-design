# Быстрый старт Telegram бота

## 1. Создайте бота в Telegram

1. Найдите @BotFather в Telegram
2. Отправьте `/newbot` и следуйте инструкциям
3. Скопируйте токен бота

## 2. Узнайте свой Chat ID

1. Найдите @userinfobot в Telegram
2. Отправьте `/start`
3. Скопируйте ваш Chat ID

## 3. Настройте сервер

```bash
# Перейдите в папку server
cd server

# Установите зависимости
npm install

# Создайте файл .env
# Windows: copy env.example .env
# Linux/Mac: cp env.example .env

# Откройте .env и заполните:
# TELEGRAM_BOT_TOKEN=ваш_токен
# TELEGRAM_CHAT_ID=ваш_chat_id
```

## 4. Запустите сервер

```bash
# В папке server
npm start
```

## 5. Готово! 

Теперь при отправке формы на сайте вы будете получать уведомления в Telegram.

Подробная инструкция: см. `TELEGRAM_BOT_SETUP.md`

