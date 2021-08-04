const request = require('supertest');

const app = require('../../src/app');
const truncate = require('../utils/truncate');

describe('User', () => {
  /*beforeEach(async () => {
    await truncate();
  });*/

  it('should create user when receive valid fields in body', async () => {
    const response = await request(app).post('/users').send({
      name: 'Usuario 1',
      email: 'usuario@email.com',
      password: 'usuario',
    });

    expect(response.status).toBe(201);
  });

  it('should return error 400 when not receiving all fields', async () => {
    const response = await request(app).post('/users').send({
      name: 'Usuario 1',
      email: 'usuario@email.com',
    });

    expect(response.status).toBe(400);
  });

  it('should return error 422 when there is already a user registered with the email', async () => {
    const response = await request(app).post('/users').send({
      name: 'Iago',
      email: 'iago@email.com',
      password: '12345678',
    });

    expect(response.status).toBe(422);
  });
});
