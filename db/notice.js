module.exports = function(table) {
  table.increments('id').primary();
  table.string('title');
  table.string('content', 16384);
  table.bigInteger('time');
  table.integer('group').defaultTo(0);
}