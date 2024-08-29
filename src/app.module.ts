/* eslint-disable @typescript-eslint/no-require-imports */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from '@hapi/joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        '.env',
        '.env.local',
        '.env.development.local',
        '.env.development',
        '.env.test',
        '.env.production',
      ],
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test')
          .default('development'),
        PORT: Joi.number().default(3000),
      }),
    }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        return {
          uri: `mongodb://${configService.get<string>('MONGODB_USERNAME')}:${configService.get<string>('MONGODB_PASSWORD')}@localhost:27017/${configService.get<string>('MONGODB_DATABASE')}`,
          connectionFactory: (connection) => {
            connection.plugin(require('mongoose-snake-to-camel'));
            connection.plugin(require('mongoose-autopopulate'));
            return connection;
          },
        };
      },
      inject: [ConfigService],
    }),
    ClientsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
