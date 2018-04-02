module.exports = function(table) {
  table.increments('id').primary();
  table.string('key').unique();
  table.string('value', 16384);
};