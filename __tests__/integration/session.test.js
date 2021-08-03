const request = require('supertest');

const app = require('../../src/app');
const truncate = require('../utils/truncate');
const { User } = require('../../src/app/models');

describe('Authentication', () => {
  // Executa automaticamente antes de cada teste de session
  beforeEach(async () => {
    await truncate();
  });

  it('should authenticate with valid credentials', async () => {
    const user = await User.create({
      name: 'Iago Silva',
      email: 'iagosilva@email.com',
      password_hash: '123456',
    });

    const response = await request(app).post('/sessions').send({
      email: user.email,
      password: '123456',
    });

    expect(response.status).toBe(200);
  });
});
