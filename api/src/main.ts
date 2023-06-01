import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// #1111 - Change 1
// #2222 - Change 2
// #3333 - Change 3
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
