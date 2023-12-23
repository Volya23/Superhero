const { Router } = require('express');
const ImageController = require('../controllers/image.controller');
const {getHeroInstance} = require('../middlewares/getHeroInstance');
const multer = require('multer');
const {STATIC_PATH} = require('../config/path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, STATIC_PATH)
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}.${file.originalname}`)
    }
})

const upload = multer ({storage});

const imageRouter  = Router();

imageRouter.post('/', ImageController.createImage);
imageRouter.get('/:heroId', getHeroInstance, ImageController.getHeroAllImages);
imageRouter.post('/:imageId', upload.single('heroImage'), ImageController.addImage);
imageRouter.delete('/:imageId', ImageController.deleteImage);
imageRouter.put('/:heroId/:imageId', getHeroInstance, ImageController.addImageToHero)
 
module.exports = imageRouter;