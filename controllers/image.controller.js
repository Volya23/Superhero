const { Image, Hero } = require('../models/index');
const NotFoundError = require('../errors/NotFoundError');

module.exports.createImage = async (req, res, next) => {
    try {
        const {body} = req;
        const creaim = await Image.create(body);
        res.status(201).send(creaim);
    } catch (error) {
        next(error);
    }
}
module.exports.addHeroToImage = async (req, res, next) => {
    try {
        const {heroInstance, params: {imageId}} = req;
        const image = await Image.findByPk(imageId);
        const result = await image.addHero(heroInstance);
        res.status(200).send('The action was taken');
    } catch (error) {
        next(error);
    }
}

module.exports.getHeroAllImages = async (req, res, next) => {
    try {
        const {heroInstance} = req;
        const allImages = await heroInstance.getImages();
        res.status(200).send(allImages);
    } catch (error) {
        next(error);
    }
}

module.exports.createHeroImage = async (req, res, next) => {
    try {
        const {params: {imageId}, file: {filename}} = req;
        const [rowCount, [updatedImage]] = await Image.update({imagePath: filename}, {
            where: {
                id: imageId
            },
            returning: true
        });
        res.send(updatedImage);
    } catch (error) {
        next(error);
    }
}

module.exports.getCountImages = async (req, res, next) => {
    try {
        const counts = await Image.findAll();
        res.status(200).send(counts);
    } catch (error) {
        next(error);
    }
}