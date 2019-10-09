import { Response, Request, NextFunction } from "express";
import { ErrorResponse } from "../response";
import Parser from "../parsing/parser";
import { Recipe } from "../domain/recipe";

export const extract = async (req: Request, res: Response) => {
    var extractionUri = (req.query['url'] || req.params['url']);
    if (!extractionUri) return res.json(new ErrorResponse(403, "Invalid URL"));

    console.log(`Parsing ${extractionUri}`);

    let parsers = req.app.get('parsers') as [{'Parser': Parser, 'Matches': RegExp[]}];
    let filteredParsers = parsers.filter(p => p.Matches.filter(match => match.test(extractionUri)).length > 0);
    let response: Recipe|ErrorResponse = new ErrorResponse(403, "No matching parser");
    let error: any;
    for (var i = 0; i < filteredParsers.length; i++)
    {
        let parser = filteredParsers[i];
        try
        {
            response = (await parser.Parser.Parse(extractionUri)) as (Recipe|ErrorResponse);
            break;
        }
        catch (e)
        {
            error = e;
        }
    }

    res.json(response || error);
}