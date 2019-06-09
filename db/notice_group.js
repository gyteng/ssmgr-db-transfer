module.exports = function(table) {
  table.increments('id');
  table.integer('noticeId');
  table.integer('groupId');
};
