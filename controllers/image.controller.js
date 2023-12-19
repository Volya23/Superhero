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
module.exports.getHeroAllImages = async (req, res, next) => {
    try {
        const {heroInstance} = req;
        const allImages = await heroInstance.getImages();
        res.status(200).send(allImages);
    } catch (error) {
        next(error);
    }
}

module.exports.getOneImage = async (req, res, next) => {
    try {
        const {params: {imageId}} = req;
        const image = await Image.findByPk(imageId);
        if (!image) {
            throw new NotFoundError ('The Subject Is Not Found');
        }
        res.status(200).send(image);
    } catch (error) {
        next(error)
    }
}

module.exports.deleteImage = async (req, res, next) => {
    try {
        const {params:{imageId}} = req;
        const deletedImage = await Image.destroy({
            where: {
                id: imageId
            }
        });
        res.status(200).send('Image was deleted!');
    } catch (error) {
        next(error)
    }
}

module.exports.updateImage = async (req, res, next) => {
    try {
        const { params: {imageId}, body} = req;
        const updatedImage = await Image.update(body, {
            where: {
                id: imageId
            }
        });
        res.status(200).send(updatedImage);
    } catch (error) {
        next(error);
    }
}

module.exports.createHeroImage = async (req, res, next) => {
    try {
        const {params: {heroId}, file: {filename}} = req;
        
        const [rowCount, [updatedImage]] = await Image.update({
            imagePath: filename
        }, {
            where: {
                id: heroId
            },
            returning: true
        });

        return res.send(updatedImage);
    } catch (error) {
        next(error);
    }
}

module.exports.getCountImages = async (req, res, next) => {
    try {
        const {heroInstance} = req;
        const counts = await heroInstance.countImages();
        res.status(200).send({counts});
    } catch (error) {
        next(error);
    }
}