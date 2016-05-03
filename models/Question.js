require('./User');
module.exports = bookshelf.model('Question', {
	tableName: 'questions',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	questioner: function() {
		return this.belongsTo('User', 'userId');
	}
});