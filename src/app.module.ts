import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FramesModule } from './frames/frames.module';

@Module({
  imports: [FramesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
