import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Frame {
  @Prop()
  name: string;

  @Prop()
  price: number;
}

export const FrameSchema = SchemaFactory.createForClass(Frame);
