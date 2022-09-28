const User = require('./User');
const Trail = require('./Trail');
const Review = require('./Review');

User.hasMany(Review, {
  foreignKey: 'id',
  onDelete: 'CASCADE',
});

Trail.hasMany(Review, {
  foreignKey: 'review_id',
});

User.belongsTo(Review, {
  foreignKey: 'user_id',
});

module.exports = { User, Trail, Review };
