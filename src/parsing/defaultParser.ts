import Parser from "./parser";
import { Recipe } from "../domain/recipe";
import { ErrorResponse } from "../response";

export default class DefaultParser implements Parser
{
    async Parse(uri: import("url").Url): Promise<Recipe> {
        throw new ErrorResponse(403, "Invalid parser");
    }
}