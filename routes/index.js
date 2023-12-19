const { Router } = require('express');
const heroRouter = require('./heroRouter');
const superpowerRouter = require('./superpowerRouter');
const imageRouter = require('./imageRouter');

const myRouter = Router();
myRouter.use('/heroes', heroRouter);
myRouter.use('/superpowers', superpowerRouter);
myRouter.use('/images', imageRouter)


module.exports = myRouter;