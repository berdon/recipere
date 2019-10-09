import Parser from "./parser";
import { Recipe } from "../domain/recipe";
import * as request from "request-promise-native";
import { Url } from "url";
import { ErrorResponse } from "../response";

export default class SpoonacularParser implements Parser
{
    public apiKey: string;

    constructor(apiKey: string)
    {
        this.apiKey = apiKey;
    }

    async Parse(uri: Url): Promise<Recipe>
    {
        let result = await request.get(`https://api.spoonacular.com/recipes/extract?apiKey=${this.apiKey}&url=${uri}`);
        let parsedResult = JSON.parse(result) as Recipe;
        if (parsedResult == null) throw new ErrorResponse(500, result.message);
        return parsedResult;
    }
}