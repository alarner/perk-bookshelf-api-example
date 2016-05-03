exports.up = function(knex, Promise) {
	return knex.schema.createTable('questionTags', function(t) {
		t.integer('questionId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('questions')
			.onDelete('CASCADE');

		t.integer('tagId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('tags')
			.onDelete('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('questionTags');
};
