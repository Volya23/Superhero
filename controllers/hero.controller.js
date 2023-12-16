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
    try {
        const {params: {heroId}, body} = req;
        const updatedHero = await Hero.update(body, {
            where: {
                id: heroId
            },
            returning: true
        });
            res.status(200).send(updatedHero);
    } catch (error) {
        next(error)
    }
}

module.exports.deleteHero = async (req, res, next) => {
    try {
        const {params: {heroId}} = req;
        const deletedHero = await Hero.destroy({
            where: {
                id: heroId
            }
        });
        if (deletedHero>0) {
            return res.status(200).send('Hero was deleted!');
        } else {
            return res.status(204);
        }
    } catch (error) {
        next(error)
    }
}