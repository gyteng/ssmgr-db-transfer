module.exports = function(table) {
  table.increments('id').primary();
  table.string('orderId').unique();
  table.integer('user');
  table.integer('refUser');
  table.integer('account');
  table.string('status');
  table.bigInteger('refTime');
  table.bigInteger('createTime');
};