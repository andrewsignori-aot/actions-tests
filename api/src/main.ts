import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// Change 1
// Change 2
// Change 3
// Change 3.1
// Change 3.1 - for release v1.0.0
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
