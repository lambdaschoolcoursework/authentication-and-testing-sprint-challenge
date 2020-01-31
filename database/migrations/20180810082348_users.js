exports.up = (knex, Promise) => {
  	return knex.schema.createTable('users', users => {
		users.increments();
		users.string('username', 255)
			.notNullable()
			.unique();
		users.string('password', 255).
			notNullable();
  	});
};

exports.down = (knex, Promise) => {
  	return knex.schema.dropTableIfExists('users');
};
