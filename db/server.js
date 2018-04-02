module.exports = function(table) {
  table.increments('id');
  table.string('name');
  table.string('host');
  table.integer('port');
  table.string('password');
  table.float('scale').defaultTo(1);
  table.string('method').defaultTo('aes-256-cfb');
  table.string('comment').defaultTo('');
}