const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('./auth-model');

const app = express.Router();

app.post('/register', (request, response) => {
	let user = request.body;
    const hash = bcrypt.hashSync(request.body.password, 10);
    user.password = hash;

    Users.add(user)
        .then(res => response.status(200).json({message: 'user created successfully'}))
        .catch(err => {
            response.status(500).json({message: 'error registering user'});
            console.log(err);
        });
});

app.post('/login', (request, response) => {
	const {username, password} = request.body;

	Users.find({username})
		.then(res => {
			if (res && bcrypt.compareSync(password, res.password)) {
                const token = generateToken(res);
                response.status(200).json({message: 'logged in successfully', token: token});
            } else {
                response.status(500).json({message: 'invalid credentials'});
            };
		})
		.catch(err => {
			response.status(500).json({message: 'error finding user'});
			console.log(err);
		});
});

function generateToken(user) {
    const payload = {
        userId: user.id,
        username: user.username
    };

    const options = {
        expiresIn: '1d'
    };

    return jwt.sign(payload, process.env.SECRET, options);
};

module.exports = app;
