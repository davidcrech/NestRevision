import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Frame } from './schemas/frames.schema';
import { Model } from 'mongoose';

@Injectable()
export class FramesService {
  constructor(@InjectModel(Frame.name) private frameModel: Model<Frame>) {}

  createFrame() {

  }
}
