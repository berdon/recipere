import { Url } from "url";
import { Ingredient } from "./ingredient";

export class Recipe
{
    public id!: number;
    public title!: string;
    public image!: string;
    public imageType!: ('jpg'|'jpeg'|'bmp'|'png');
    public servings!: number;
    public readyInMinutes!: number;
    public license!: string;
    public sourceName!: string;
    public sourceUrl!: Url;
    public healthScore!: number;
    public pricePerServing!: number;
    public analyzedInstructions!: Array<any>;
    public cheap!: boolean;
    public creditsText!: string;
    public cuisines!: any;
    public dairyFree!: boolean;
    public diets!: Array<string>;
    public gaps!: string;
    public glutenFree!: boolean;
    public instructions!: string;
    public ketogenic!: boolean;
    public lowFodmap!: boolean;
    public occasions!: any;
    public sustainable!: boolean;
    public vegan!: boolean;
    public vegetarian!: boolean;
    public veryHealthy!: boolean;
    public veryPopular!: boolean;
    public whole30!: boolean;
    public weightWatcherSmartPoints!: number;
    public dishTypes!: Array<string>;
    public extendedIngredients!: Array<Ingredient>;
    public winePairings!: Array<string>;
}