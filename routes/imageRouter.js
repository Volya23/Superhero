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
imageRouter.put('/:heroId/:imageId', getHeroInstance, ImageController.addHeroToImage);
imageRouter.get('/:heroId', getHeroInstance, ImageController.getHeroAllImages);
imageRouter.post('/:imageId', upload.single('heroImage'), ImageController.createHeroImage);
imageRouter.get('/', ImageController.getCountImages);
 
module.exports = imageRouter;