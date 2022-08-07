export const EnvConfiguration = () => ({
    enviroment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    port: process.env.PORT || 3001,
    jwtSecret: process.env.JWT_SECRET,
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
})