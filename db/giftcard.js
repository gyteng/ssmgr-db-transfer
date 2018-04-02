module.exports = function(table) {
  table.increments('id').primary();
  table.string('password').unique().notNull();
  table.integer('orderType').notNull();
  table.string('status').notNull();
  table.integer('batchNumber').notNull();
  table.integer('user');
  table.integer('account');
  table.bigInteger('createTime').notNull();
  table.bigInteger('usedTime');
  table.string('comment').defaultTo('');
};