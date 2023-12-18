const express = require ('express');
//const HeroController = require('./controllers/hero.controller');
const myRouter = require('./routes');

const app = express();
const bodyParser = express.json();

app.use(bodyParser);
app.use('/api', myRouter);

module.exports = app;

