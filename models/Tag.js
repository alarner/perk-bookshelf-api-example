require('./Question');
module.exports = bookshelf.model('Tag', {
	tableName: 'tags',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	questions: function() {
		return this.belongsToMany('Question', 'questionTags', 'tagId', 'questionId');
	}
});