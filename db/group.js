module.exports = function(table) {
  table.increments('id');
  table.string('name');
  table.string('comment');
  table.string('order');
  table.integer('multiAccount').defaultTo(0);
}