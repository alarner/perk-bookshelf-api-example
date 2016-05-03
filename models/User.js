require('./Authentication');
require('./Question');
module.exports = bookshelf.model('User', {
	tableName: 'users',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	authentication: function() {
		return this.hasMany('Authentication', 'userId');
	},
	questions: function() {
		return this.hasMany('Question', 'userId');
	}
});