import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
    MONGODB: Joi.required(),
    PORT: Joi.number().default(3001),
    JWT_SECRET: Joi.required(),
    TELEGRAM_BOT_TOKEN: Joi.required(),
});