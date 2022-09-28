const router = require('express').Router();
const userRoutes = require('./userRoutes');
const trailRoutes = require('./trailRoute');

router.use('/users', userRoutes);
router.use('/trails', trailRoutes);

module.exports = router;
