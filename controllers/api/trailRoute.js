const router = require('express').Router();
const { Trails } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {});

router.get('/:id', withAuth, async (req, res) => {
  try {
    const newTrail = await Trails.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTrail);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
