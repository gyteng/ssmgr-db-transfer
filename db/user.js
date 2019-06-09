module.exports = function(table) {
  table.increments('id').primary();
  table.string('username').unique();
  table.string('email');
  table.string('telegram');
  table.string('password');
  table.string('type');
  table.bigInteger('createTime');
  table.bigInteger('lastLogin');
  table.string('resetPasswordId');
  table.bigInteger('resetPasswordTime');
  table.integer('group').defaultTo(0);
  table.string('comment').defaultTo('');
};