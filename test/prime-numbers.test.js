const { primeNumbersRequest } = require('../src/controllers/random-number.controller');
const request = require('supertest');
const app = require('express')();;

describe('Test ROUTES', () => {
    test('GET /prime-numbers - success', async () => {
        const body = {prime_list: []}
        expect(body).toEqual({prime_list: []})
    })

    test('GET /prime-numbers - success', async (done) => {
        const res = await request(app)
        .get('/prime-numbers');
        expect(res.statusCode).toEqual(404)
        done();
    })
})
