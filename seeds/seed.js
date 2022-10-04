const sequelize = require('../config/connection');
const { User, Trail } = require('../models');

const userData = require('./userData.json');
const trailData = require('./trailData.json');

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

  process.exit(0);
};

seedDatabase();
