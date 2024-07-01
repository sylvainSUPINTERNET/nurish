import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Meal, MealDocument } from "../schemas/meal.schema";
import { IMealCreateDto } from "../dto/mealCreate.dto";


@Injectable()
export class MealService {
    constructor(@InjectModel(Meal.name) private readonly mealModel: Model<MealDocument>) { }

    async create(mealCreateDto: IMealCreateDto): Promise<Meal> {
        const meal = new this.mealModel(mealCreateDto);
        return meal.save();
    }

}