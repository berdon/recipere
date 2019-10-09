import recipere from './recipere';
import SpoonacularParser from './parsing/spoonacularParser';

var app = recipere({
    port: 3000
});

app.use(new SpoonacularParser(''), new RegExp('.*'));
app.start();