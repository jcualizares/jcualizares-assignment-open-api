import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { weatherstackModule } from './weatherstack/weatherstack.module';

@Module({
  imports: [weatherstackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
