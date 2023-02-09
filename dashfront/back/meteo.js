const express = require('express');
const cors = require('cors');

const Sequelize = require('sequelize');
const BDD = new Sequelize('dataJSON', 'user', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: 'dataJSON.sqlite',
    });

const Meteo = BDD.define('meteo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    date: {
        type: Sequelize.STRING,
        unique: true,
    },
    temp: {
        type: Sequelize.FLOAT,
    },
    temp_min: {
        type: Sequelize.FLOAT,
    },
    temp_max: {
        type: Sequelize.FLOAT,
    },
    humidity: {
        type: Sequelize.FLOAT,
    },
});

Meteo.sync();

const app = express();
const port = 3080;

app.use(cors());

app.get('/meteo', (req, res) => {
    const queryUrl = "https://api.openweathermap.org/data/2.5/onecall?";
    const lat = "lat=48.007751&";
    const lon = "lon=0.198520&";
    const apiOptions = "units=metric&exclude=minutely,alerts&";
    const apiKey = "appid=dbb76c5d98d5dbafcb94441c6a10236e&"; //thanks tonton
    const lang = "lang=fr"; //Choice language
    const requestFull = queryUrl + lat + lon + apiOptions + apiKey + lang;


    

    

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);
