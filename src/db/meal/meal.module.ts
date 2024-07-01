import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Meal, MealSchema } from './schemas/meal.schema';
import { MealService } from './services/meal.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Meal.name, schema: MealSchema }])],
    providers: [MealService],
    exports: [MealService]
})
export class MealModule {}
