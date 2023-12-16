const { Hero } = require('../models/index');

module.exports.createHero = async (req, res, next) => {
    try {
        const {body} = req;
        console.log(body);
        const result = await Hero.create(body);
        
        res.status(201).send(result);
    } catch (error) {
        next(error)
    }
}

module.exports.getOneHero = async (req, res, next) => {

}

module.exports.getAllHeroes = async (req, res, next) => {

}

module.exports.updateHero = async (req, res, next) => {

}

module.exports.deleteHero = async (req, res, next) => {

}