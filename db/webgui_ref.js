module.exports = function(table) {
  table.increments('id').primary();
  table.integer('codeId');
  table.integer('userId');
  table.bigInteger('time');
};
