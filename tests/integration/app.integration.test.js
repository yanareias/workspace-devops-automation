const request = require('supertest');
const app = require('../../server');

describe('Integração da aplicação', () => {
  test('GET / retorna a mensagem do projeto', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      status: 'ok',
      message: 'Projeto DevOps Automation funcionando!'
    });
  });

  test('GET /health retorna status saudável', async () => {
    const response = await request(app).get('/health');

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('healthy');
  });
});