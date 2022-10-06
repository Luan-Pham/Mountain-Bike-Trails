const sequelize = require('../config/connection');
const { User, Trail, Review } = require('../models');

const userData = require('./userData.json');
const trailData = require('./trailData.json');
const reviewData = require('./reviewData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const trail of trailData) {
    const seedData = await Trail.create({
      ...trail,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
    console.log(seedData);
  }

  for (const review of reviewData) {
    await Review.create({
      ...review,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
