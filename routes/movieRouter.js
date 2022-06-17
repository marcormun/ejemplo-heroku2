const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movieController');

router.get('/', movieController.getAll);
router.get('/id=:id', movieController.getById);
router.get('/titulo=:title', movieController.getByTitle);
router.get('/ano=:year', movieController.getByYear);
router.post('/', movieController.create);
router.put('/id=:id', movieController.update);
router.delete('/id=:id', movieController.delete);

module.exports = router;