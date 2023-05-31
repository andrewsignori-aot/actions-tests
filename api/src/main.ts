import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// v1.0.0 - change 1
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
