export interface IMealCreateDto {
    name: string;
    nutriscore: "A"|"B"|"C"|"D"|"E";
    ecoreScore: "A"|"B"|"C"|"D"|"E";
    calories: number;
    extraSpec?: "vegan" | "glutenFree" | "lactoseFree" | "bio" | "halal" | "casher" | "luxury";
    description: string;
    topings: string[];
    allergens: string[];
    weight: number;
    macroNutrients: string[];
    microNutrients: string[];
    preparation: string[];
}