import { Controller } from '@nestjs/common';
import { FramesService } from './frames.service';

@Controller('frames')
export class FramesController {
  constructor(private readonly framesService: FramesService) {}
}
