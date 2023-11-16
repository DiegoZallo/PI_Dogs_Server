
const { Router } = require('express');
const { getDogs } = require('../controllers/getDogs');
const { getDogDetail } = require('../controllers/getDogDetail');
const { postDog } = require('../controllers/postDog');
const { deleteDog } = require('../controllers/deleteDog');

const dogRouter = Router();

dogRouter.get('/', getDogs);
dogRouter.get('/:id', getDogDetail);
dogRouter.post('/', postDog);
dogRouter.delete('/:id', deleteDog);

module.exports = dogRouter;