const { Router } = require('express');
const HeroController = require('../controllers/hero.controller');
const {getHeroInstance} = require('../middlewares/getHeroInstance');
const multer = require('multer');
const path = require ('path');

const imagePath = path.resolve(__dirname, '../public/images');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, imagePath)
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}.${file.originalname}`)
    }
})

const upload = multer ({storage});

const heroRouter  = Router();

heroRouter.post('/', HeroController.createHero);
heroRouter.get('/', HeroController.getAllHeroes);
heroRouter.get('/:heroId', getHeroInstance, HeroController.getOneHero);
heroRouter.delete('/:heroId', getHeroInstance, HeroController.deleteHero);
heroRouter.put('/:heroId', getHeroInstance, HeroController.updateHero);
heroRouter.post('/:heroId', upload.single('heroImage'), HeroController.createHeroImage);


module.exports = heroRouter;