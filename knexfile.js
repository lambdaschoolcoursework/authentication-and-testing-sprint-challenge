require('dotenv').config();

module.exports = {
	development: {
		client: 'pg',
		connection: {
			database: process.env.DATABASE,
			user: process.env.USER,
			password: process.env.PASSWORD
		},
		migrations: {
			directory: './database/migrations',
		},
		seeds: {
			directory: './database/seeds'
		}
	},
	test: {
		client: 'pg',
		connection: {
			database: process.env.DATABASE_TEST,
			user: process.env.USER,
			password: process.env.PASSWORD
		},
		migrations: {
			directory: './database/migrations',
		}
	}
};
