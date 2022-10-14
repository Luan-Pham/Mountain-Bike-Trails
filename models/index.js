const User = require('./User');
const Trail = require('./Trail');
const Review = require('./Review');

User.hasMany(Review, {
  foreignKey: 'user_id',
});

Trail.hasMany(Review, {
  foreignKey: 'trail_id',
});

Review.belongsTo(Trail, {
  foreignKey: 'trail_id',
  onDelete: 'CASCADE',
});

Review.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Trail, Review };
