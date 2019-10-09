import { Url } from "url";
import { Recipe } from "../domain/recipe";
import { ErrorResponse } from "../response";

export default interface Parser
{
    Parse(uri: Url): Promise<Recipe>;
}