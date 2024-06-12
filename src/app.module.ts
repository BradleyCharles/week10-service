import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestapiController } from './nestapi/nestapi.controller';

@Module({
  imports: [],
  controllers: [AppController, NestapiController],
  providers: [AppService],
})
export class AppModule {}
