const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');
const authenticate = require('../auth/authenticate-middleware.js');

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/api/auth', authRouter);
app.use('/api/jokes', authenticate, jokesRouter);

module.exports = app;
