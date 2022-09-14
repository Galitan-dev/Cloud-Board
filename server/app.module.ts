import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
	imports: [
		UserModule,
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'cloud-board-db',
			username: 'cloud',
			password: 'board',
			database: 'cloud-board',
			autoLoadEntities: true,
			synchronize: true
		})
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
