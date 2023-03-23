const express = require('express');
const cors = require('cors');

const app = express();
const port = 3080;

app.use(cors());

app.use('/', require('./nothing.js')());
//========================
//======= WEATHER ========
//========================
const weather = require('./weather.js');
const nameOfWeatherCollection = 'weather';

app.use('/' + nameOfWeatherCollection, weather(nameOfWeatherCollection));


/*
//========================
//======== NEWS ==========
//========================
const news = require('./news.js');
const nameOfNewsCollection = 'news';

app.use('/' + nameOfNewsCollection, news(nameOfNewsCollection));
*/
//========================
//======= RECIPE =========
//========================
const recipe = require('./recipe.js');
const nameOfRecipeCollection = 'recipe';

app.use('/' + nameOfRecipeCollection, recipe(nameOfRecipeCollection));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});