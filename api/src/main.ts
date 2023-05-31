import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// v1.0.0 - change 1
// v1.0.0 - change 2
// v1.0.0 - change 3
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
