const { Hero } = require('../models/index');

module.exports.createHero = async (req, res, next) => {
    try {
        const {body} = req;
        const result = await Hero.create(body);
        res.status(201).send(result);
    } catch (error) {
        next(error)
    }
}
module.exports.getAllHeroes = async (req, res, next) => {
    try {
        const allHeroes = await Hero.findAll();
        res.status(200).send(allHeroes);
    } catch (error) {
        next(error)
    }
}
module.exports.getOneHero = async (req, res, next) => {
    try {
        const {params: {heroId}} = req;
        const hero = await Hero.findByPk(heroId);
        res.status(200).send(hero);
    } catch (error) {
        next(error)
    }
}
module.exports.updateHero = async (req, res, next) => {

}

module.exports.deleteHero = async (req, res, next) => {

}