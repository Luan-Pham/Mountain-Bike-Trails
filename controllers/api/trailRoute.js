const router = require('express').Router();
const { Trail } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all trails
    const trailData = await Trail.findAll({});

    // Serialize data so the template can read it
    const trails = trailData.map((trail) => trail.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('trails', {
      trails,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

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
