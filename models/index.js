const User = require('./User');
const Trails = require('./trails');
const Reviews = require('./reviews');

User.hasMany(Reviews, {
  foreignKey: 'review_id',
  onDelete: 'CASCADE',
});

Trails.hasMany(Reviews, {
  foreignKey: 'review_id',
});

User.belongsTo(Reviews, {
  foreignKey: 'review_id',
});

module.exports = { User, Trails, Reviews };
