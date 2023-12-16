const express = require ('express');
const HeroController = require('./controllers/hero.controller');

const app = express();
const bodyParser = express.json();

app.use(bodyParser);

app.post('/', HeroController.createHero);


module.exports = app;