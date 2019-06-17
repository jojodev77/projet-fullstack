import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
/*
  app.use((req, res, next) => {
res.header('Acces-Control-Allow-Origin', '*');
res.header('Acces-Control-Allow-Methods', 'GET');
res.header('Acces-Control-Allow-Headers', 'Content-Type, Accept');
next();
  });*/
  await app.listen(3000);
}
bootstrap();
