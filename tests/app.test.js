const request = require('supertest');
const app = require('../server');

describe('Testes da aplicação', () => {
  test('GET / deve retornar status 200', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('ok');
  });

  test('GET /health deve indicar aplicação saudável', async () => {
    const response = await request(app).get('/health');

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('healthy');
  });
});