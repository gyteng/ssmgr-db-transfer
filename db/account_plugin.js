module.exports = function(table) {
  table.increments('id');
  table.integer('type');
  table.integer('userId');
  table.string('server');
  table.integer('port').unique();
  table.string('password');
  table.string('data');
  table.string('subscribe');
  table.integer('status');
  table.integer('autoRemove').defaultTo(0);
  table.integer('multiServerFlow').defaultTo(0);
};