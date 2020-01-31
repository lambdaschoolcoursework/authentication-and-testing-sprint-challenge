const database = require('../database/dbConfig');

const register = user => {
    return database('users').insert(user);
};

const find = username => {
    return database('users').where(username).first();
};

module.exports = {
    register,
    find
};