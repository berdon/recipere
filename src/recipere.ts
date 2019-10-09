import express from 'express';
import { Express } from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';

import DefaultParser from './parsing/defaultParser';
import * as recipeController from './controllers/recipe';
import Parser from './parsing/parser';

export type RecipereBuilderOptions = {
    port: number;
}

export class RecipereBuilder
{
    private readonly expressBuilder: Express;

    constructor(expressBuilder: Express)
    {
        this.expressBuilder = expressBuilder;
    }

    public use(parser: Parser, ...matches: RegExp[])
    {
        this.expressBuilder.set("parsers", [].concat([{
            'Parser': parser,
            'Matches': matches
        }] as any, this.expressBuilder.get("parsers") as any));
        console.log(this.expressBuilder.get('parsers'));
    }

    public start()
    {
        this.expressBuilder.listen(this.expressBuilder.get("port"), () => {
            console.log(
                "  App is running at http://localhost:%d in %s mode",
                this.expressBuilder.get("port"),
                this.expressBuilder.get("env")
            );
            console.log("  Press CTRL-C to stop\n");
        });
    }
}

export default (options: RecipereBuilderOptions): RecipereBuilder => {
    const expressBuilder = express();
    expressBuilder.set("port", options.port);
    expressBuilder.set("parsers", [{ 'Parser': new DefaultParser(), 'Matches': [/.*/] }])
    expressBuilder.use(compression());
    expressBuilder.use(bodyParser.json());
    expressBuilder.use(bodyParser.urlencoded({ extended: true }));

    expressBuilder.get('/api/recipes/extract', recipeController.extract)

    return new RecipereBuilder(expressBuilder);
};