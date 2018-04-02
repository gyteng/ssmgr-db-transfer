module.exports = function(table) {
  table.increments('id');
  table.string('name');
  table.string('comment');
}