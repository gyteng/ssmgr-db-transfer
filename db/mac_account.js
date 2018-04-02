module.exports = function(table) {
  table.increments('id');
  table.string('mac').unique();
  table.integer('userId');
  table.integer('accountId');
  table.integer('serverId');
}