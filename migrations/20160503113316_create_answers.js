exports.up = function(knex, Promise) {
	return knex.schema.createTable('answers', function(table) {
		table.increments('id').unsigned().primary();
		table.dateTime('createdAt').notNull();
		table.dateTime('updatedAt').nullable();
		table.dateTime('deletedAt').nullable();

		table.text('body').nullable();

		table.integer('userId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('users')
			.onDelete('CASCADE');

		table.integer('questionId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('questions')
			.onDelete('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('answers');
};
