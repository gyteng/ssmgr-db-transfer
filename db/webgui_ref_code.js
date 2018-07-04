module.exports = function(table) {
  table.increments('id').primary();
  table.string('code').unique();
  table.integer('sourceUserId');
  table.integer('visit').defaultTo(0);
  table.integer('maxUser').defaultTo(3);
  table.bigInteger('time');
};