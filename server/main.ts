import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppInterceptor } from './app.interceptor';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.setGlobalPrefix('/api');
	app.useGlobalPipes(new ValidationPipe());
	app.useGlobalInterceptors(new AppInterceptor());

	if (!process.env.PORT) throw new Error('PORT not specified');
	await app.listen(parseInt(process.env.PORT));
}
bootstrap();
