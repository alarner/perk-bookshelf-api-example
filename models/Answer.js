require('./User');
require('./Question');
module.exports = bookshelf.model('Answer', {
	tableName: 'answers',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	answerer: function() {
		return this.belongsTo('User', 'userId');
	},
	question: function() {
		return this.belongsTo('Question', 'questionId');
	}
});