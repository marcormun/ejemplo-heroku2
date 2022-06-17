const movieRouter = require('./routes/movieRouter');
const router = require('express').Router();

router.use('/movies', movieRouter);

module.exports = router;