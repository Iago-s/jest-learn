const { User } = require('../../src/app/models');

describe('Authentication', () => {
  it('should create user', async () => {
    const user = await User.create({
      name: 'User',
      email: 'user@email.com',
      password_hash: '123456',
    });

    expect(user.email).toBe('user@email.com');
  });
});
