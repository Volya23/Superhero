const express = require ('express');
const HeroController = require('./controllers/hero.controller');

const app = express();
const bodyParser = express.json();

app.use(bodyParser);

app.post('/', HeroController.createHero);
app.get('/', HeroController.getAllHeroes);
app.get('/:heroId', HeroController.getOneHero);
app.delete('/:heroId', HeroController.deleteHero);
app.put('/:heroId', HeroController.updateHero);


module.exports = app;