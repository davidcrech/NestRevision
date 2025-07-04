import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

class Frame {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}

export class CreateFrameDto {
  frame: Frame;
}

export class CreateSetOfFramesDto {
  @IsArray()
  @ValidateNested()
  @Type(() => Frame)
  frames: Frame[];
}
