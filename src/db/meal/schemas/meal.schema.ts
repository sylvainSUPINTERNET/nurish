import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MealDocument = HydratedDocument<Meal>;

@Schema({ timestamps: true})
export class Meal {

  @Prop()
  name: string;

  @Prop()
  nutriscore: string;

  @Prop()
  ecoreScore: string;

  @Prop()
  calories: number;

  @Prop()
  extraSpec: string;

  @Prop()
  description: string;

  @Prop()
  topings: string[];

  @Prop()
  allergens: string[];

  @Prop()
  weight: number;

  @Prop()
  macroNutrients: string[];

  @Prop()
  microNutrients: string[];

  @Prop()
  preparation: string[];

  @Prop()
  pictureUrl: string;
}

export const MealSchema = SchemaFactory.createForClass(Meal);