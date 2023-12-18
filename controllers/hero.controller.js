const { Hero } = require('../models/index');

module.exports.createHero = async (req, res, next) => {
    try {
        const {body} = req;
        const result = await Hero.create(body);
        res.status(201).send(result);
    } catch (error) {
        next(error);
    }
}
module.exports.getAllHeroes = async (req, res, next) => {
    try {
        const allHeroes = await Hero.findAll({offset: 0, limit: 5});
        res.status(200).send(allHeroes);
    } catch (error) {
        next(error);
    }
}
module.exports.getOneHero = async (req, res, next) => {
    try {
        const {heroInstance} = req;
        res.status(200).send(heroInstance);
    } catch (error) {
        next(error);
    }
}
module.exports.updateHero = async (req, res, next) => {
    try {
        const {heroInstance, body} = req;
        const updatedHero = await heroInstance.update(body);
        res.status(200).send(updatedHero);
    } catch (error) {
        next(error);
    }
}

module.exports.deleteHero = async (req, res, next) => {
    try {
        const {heroInstance} = req;
        const deletedHero = await heroInstance.destroy();
        res.status(200).send('Hero was deleted!');
    } catch (error) {
        next(error);
    }
}

module.exports.createHeroImage = async (req, res, next) => {
    try {
        const {params:{heroId}, file: {filename}} = req;
        const [rowCount, [addImg]] = await Hero.update({imagePath: filename}, {
            where:{
                id: heroId
            },
            returning: true
        });
        res.status(200).send(addImg);
    } catch (error) {
        next(error);
    }
}