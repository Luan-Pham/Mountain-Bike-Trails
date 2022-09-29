const router = require('express').Router();
const { Trail, User } = require('../models');
const withAuth = require('../utils/auth');
const axios = require('axios');

router.get('/trails', async (req, res) => {
  console.log('TESTING');
  try {
    var location = document.getElementById('searchInput').value;
    location = location.split(',');
    var city = location[0];
    city = city.replace(/ /g, '%20');
    var state = location[1];
    state = state.replace(/ /g, '%20');
    console.log(location);
    const geoAPI =
      'https://api.geoapify.com/v1/geocode/search?city=' +
      city +
      '&state=' +
      state +
      '&apiKey=' +
      process.env.GEO_KEY;
    fetch(geoAPI)
      .then((response) => response.json())
      .then(function (data) {
        console.log(data);
        geoLat = data.features[0].properties.lat;
        geoLon = data.features[0].properties.lon;
      });
    const options = {
      method: 'GET',
      url: 'https://trailapi-trailapi.p.rapidapi.com/activity/',
      params: {
        lat: geoLat,
        limit: '5',
        lon: geoLon,
        radius: '25',
        'q-activities_activity_type_name_eq': 'mountain biking',
      },
      headers: {
        'X-RapidAPI-Key': process.env.TRAIL_KEY,
        'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com',
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log('--------------------------------');
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    res.json('TESTING');
    // Serialize data so the template can read it
    // const trails = trailData.map((trail) => trail.get({ plain: true }));

    // Pass serialized data and session flag into template
    // res.render('homepage', {
    //   trails,
    //   logged_in: req.session.logged_in,
    // });
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    // Get all trails and JOIN with user data
    const trailData = await Trail.findAll({
      // include: [
      //   {
      //     model: User,
      //     attributes: ['name'],
      //   },
      // ],
    });

    // Serialize data so the template can read it
    const trails = trailData.map((trail) => trail.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      trails,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/trail/:id', async (req, res) => {
  try {
    const trailData = await Trail.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const trail = trailData.get({ plain: true });

    res.render('trail', {
      ...trail,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Trail }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
