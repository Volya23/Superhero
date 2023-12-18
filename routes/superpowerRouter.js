const { Router } = require('express');
const SuperpowerController = require('../controllers/superpower.controller');
const {getHeroInstance} = require('../middlewares/getHeroInstance');

const superpowerRouter  = Router();

superpowerRouter.post('/:heroId', getHeroInstance, SuperpowerController.createPower);
superpowerRouter.get('/:heroId', getHeroInstance, SuperpowerController.getAllHeroPowers);
superpowerRouter.get('/sum/:powerId', SuperpowerController.getOnePower);
superpowerRouter.get('/count/:heroId', getHeroInstance, SuperpowerController.getCountPowers);
superpowerRouter.delete('/:powerId', SuperpowerController.deletePower);
superpowerRouter.put('/:powerId', SuperpowerController.updatePower);

module.exports = superpowerRouter;