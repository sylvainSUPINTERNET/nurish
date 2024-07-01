import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MealDocument = HydratedDocument<Meal>;

@Schema({ timestamps: true})
export class Meal {

  @Prop()
  name: string;

  // TODO
}

export const MealSchema = SchemaFactory.createForClass(Meal);