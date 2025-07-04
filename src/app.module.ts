import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FramesModule } from './frames/frames.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    FramesModule,
    MongooseModule.forRoot('mongodb://localhost:27017/frames-shopDB'),
    FramesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
