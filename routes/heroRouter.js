const { Router } = require('express');
const HeroController = require('../controllers/hero.controller');
const {getHeroInstance} = require('../middlewares/getHeroInstance');

const heroRouter  = Router();

heroRouter.post('/', HeroController.createHero);
heroRouter.get('/', HeroController.getAllHeroes);
heroRouter.get('/:heroId', getHeroInstance, HeroController.getOneHero);
heroRouter.delete('/:heroId', getHeroInstance, HeroController.deleteHero);
heroRouter.put('/:heroId', getHeroInstance, HeroController.updateHero);


module.exports = heroRouter;