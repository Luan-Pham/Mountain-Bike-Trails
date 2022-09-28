const router = require('express').Router();
const { Reviews } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newReviews = await Reviews.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newReviews);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const reviewsData = await Reviews.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!reviewsData) {
      res.status(404).json({ message: 'No reviews found with this id!' });
      return;
    }

    res.status(200).json(reviewsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
