import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { EnvConfiguration } from './config/app.config';
import { JoiValidationSchema } from './config/joi.validation';
import { CommonModule } from './common/common.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TelegramBotModule } from './telegram-bot/telegram-bot.module';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      load: [ EnvConfiguration ],
      validationSchema: JoiValidationSchema,
      isGlobal: true,
      expandVariables: true,
    }),
    ServeStaticModule.forRoot({ 
      rootPath: join(__dirname,'..','public'),
    }),
    MongooseModule.forRoot(process.env.MONGODB),
    CommonModule,
    AuthModule,
    UsersModule,
    TelegramBotModule,
  ],
})
export class AppModule {}
