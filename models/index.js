const User = require('./User');
const Trail = require('./Trail');
const Trail = require('./Trail');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Trail.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Trail };
