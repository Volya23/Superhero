const { Superpower, Hero } = require('../models');

module.exports.createPower = async (req, res, next) => {
    try {
        const {body, heroInstance} = req;
        const power = await heroInstance.createSuperpower(body);
        res.status(201).send(power);
    } catch (error) {
        next(error);
    }
}
module.exports.getAllHeroPowers = async (req, res, next) => {
    try {
        const {heroInstance} = req;
        const allPowers = await heroInstance.getSuperpowers({offset: 0, limit: 5});
        res.status(200).send(allPowers);
    } catch (error) {
        next(error);
    }
}

module.exports.getOnePower = async (req, res, next) => {
    try {
        const {params: {powerId}} = req;
        const superpower = await Superpower.findByPk(powerId);
        res.status(200).send(superpower);
    } catch (error) {
        next(error)
    }
}

module.exports.deletePower = async (req, res, next) => {
    try {
        const {params:{powerId}} = req;
        const deletedPower = await Superpower.destroy({
            where: {
                id: powerId
            }
        });
        res.status(200).send('Superpower was deleted!');
    } catch (error) {
        next(error)
    }
}

module.exports.getCountPowers = async (req, res, next) => {
    try {
        const {heroInstance} = req;
        const count = await heroInstance.countSuperpowers();
        res.status(200).send({count});
    } catch (error) {
        next(error);
    }
}

module.exports.updatePower = async (req, res, next) => {
    try {
        const { params: {powerId}} = req;
        const updatedPower = await Superpower.update(powerId);
        res.status(200).send(updatedPower);
    } catch (error) {
        next(error);
    }
}