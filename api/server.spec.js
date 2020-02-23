const request = require('supertest');
const server = require('./server');
const database = require('../database/dbConfig');

describe('post /register', () => {
    beforeEach(async () => {
        await database('users').truncate();
    });

    test('returns status 200', () => {
        return request(server).post('/api/auth/register')
            .send({
                username: 'test',
                password: 'test'
            })
            .then(res => {
                expect(res.status).toBe(200);
            });
    });

    test('returns success message', () => {
        return request(server).post('/api/auth/register')
            .send({
                username: 'test',
                password: 'test'
            })
            .then(res => {
                expect(res.body.message).toBe('user created successfully');
            });
    });
});

describe('post /login', () => {
    test('returns status 200', () => {
        return request(server).post('/api/auth/login')
            .send({
                username: 'test',
                password: 'test'
            })
            .then(res => {
                expect(res.status).toBe(200);
            });
    });

    test('returns success message', () => {
        return request(server).post('/api/auth/login')
            .send({
                username: 'test',
                password: 'test'
            })
            .then(res => {
                expect(res.body.message).toBe('logged in successfully');
            });
    });
});

describe('get /jokes', () => {
    test('returns status 200', () => {
        return request(server).get('/api/jokes')
            .set('Authorization', process.env.TOKEN)
            .then(res => {
                expect(res.status).toBe(200);
            });
    });

    test('returns data', () => {
        return request(server).get('/api/jokes')
            .set('Authorization', process.env.TOKEN)
            .then(res => {
                expect(res.body).toHaveLength(20);
            });
    });
});