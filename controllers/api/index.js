const router = require('express').Router();
const userRoutes = require('./userRoutes');
const trailRoutes = require('./trailRoute');
const reviewRoutes = require('./reviewsRoute');

router.use('/users', userRoutes);
router.use('/trails', trailRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;
