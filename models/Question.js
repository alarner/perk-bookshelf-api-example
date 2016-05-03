require('./User');
require('./Tag');
module.exports = bookshelf.model('Question', {
	tableName: 'questions',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	questioner: function() {
		return this.belongsTo('User', 'userId');
	},
	tags: function() {
		return this.belongsToMany('Tag', 'questionTags', 'questionId', 'tagId');
	}
});