import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// Change 1
// Change 2
// Change 3
// Change 4
// Change 5
// Change 10
// Change 11
// Change 12
// Change 20
// Change 21
// Change 22
// Change 30
// Change 31
// Change 32
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
