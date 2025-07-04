import { Module } from '@nestjs/common';
import { FramesService } from './frames.service';
import { FramesController } from './frames.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Frame, FrameSchema } from './schemas/frames.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Frame.name,
        schema: FrameSchema,
      },
    ]),
  ],
  controllers: [FramesController],
  providers: [FramesService],
})
export class FramesModule {}
