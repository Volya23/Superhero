const { Router } = require('express');
const ImageController = require('../controllers/image.controller');
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

const imageRouter  = Router();

imageRouter.post('/', ImageController.createImage);
imageRouter.get('/', getHeroInstance, ImageController.getHeroAllImages);
imageRouter.get('/:imageId', ImageController.getOneImage);
imageRouter.delete('/:imageId', ImageController.deleteImage);
imageRouter.put('/:imageId', ImageController.updateImage);
imageRouter.patch('/:heroId', upload.single('heroImage'), ImageController.createHeroImage);
imageRouter.get('/count/:imageId', ImageController.getCountImages);

module.exports = imageRouter;