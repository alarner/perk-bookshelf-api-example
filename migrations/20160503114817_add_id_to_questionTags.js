exports.up = function(knex, Promise) {
	return knex.schema.table('questionTags', function(t) {
		t.increments('id').unsigned().primary();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.table('questionTags', function(t) {
		t.dropColumn('id');
	});
};
