const bcrypt = require('bcryptjs');

const { User } = require('../models');

class UserController {
  async store(req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const alreadyUser = await User.findOne({ where: { email } });

    if (alreadyUser) {
      return res
        .status(422)
        .json({ message: 'There is already a user with this email' });
    }

    const hash_password = /*await bcrypt.hashSync(password, 8);*/ password;

    try {
      const user = await User.create({
        name,
        email,
        password_hash: hash_password,
      });

      return res.status(201).json(user);
    } catch (err) {}
  }
}

module.exports = new UserController();
