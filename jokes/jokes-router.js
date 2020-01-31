const express = require('express');
const axios = require('axios');

const app = express.Router();

app.get('/', (request, response) => {
	const requestOptions = {
		headers: {accept: 'application/json'},
	};

	axios.get('https://icanhazdadjoke.com/search', requestOptions)
		.then(res => response.status(200).json(res.data.results))
		.catch(err => {
			res.status(500).json({message: 'error fetching jokes'});
			console.log(err);
		});
});

module.exports = app;
