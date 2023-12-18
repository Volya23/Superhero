const { Router } = require('express');
const heroRouter = require('./heroRouter');
const superpowerRouter = require('./superpowerRouter');

const myRouter = Router();
myRouter.use('/heroes', heroRouter);
myRouter.use('/superpowers', superpowerRouter);


module.exports = myRouter;