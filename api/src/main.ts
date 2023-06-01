import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// #1111 - Change one
// #2222 - Change two
const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
