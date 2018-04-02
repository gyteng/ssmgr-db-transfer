module.exports = function(table) {
  table.increments('id').primary();
  table.string('orderId').unique();
  table.integer('orderType').defaultTo(3);
  table.string('amount');
  table.integer('user');
  table.integer('account');
  table.string('qrcode');
  table.string('status');
  table.string('alipayData', 4096);
  table.bigInteger('createTime');
  table.bigInteger('expireTime');
};