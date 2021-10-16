import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';

const PORT = 3000;
const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'debug'],
    // logger: false,
  });

  app.use(morgan('tiny'));

  await app.listen(PORT);
}
bootstrap().then(() => logger.debug(`Starting Application on PORT: ${PORT}`));
