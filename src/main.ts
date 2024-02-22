import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from 'src/config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new ConfigService();

  app.setGlobalPrefix(config.get('GLOBAL_PREFIX'));

  await app.listen(config.get('API_PORT') ?? 9999);
}
bootstrap();