const { User } = require('../models');
const bcrypt = require('bcrypt');
const { authorizeUser } = require('../services/auth');

class UserProvider {
  async login({ email, password }) {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error('user or password invalid');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new Error('user or password invalid');
    }

    return authorizeUser(user);
  }

  async create({ email, password, name }) {
    const passEncrypt = await bcrypt.hash(password, 10),
      user = await User.create({ email, password: passEncrypt, name });

    return authorizeUser(user);
  }
}

const userProvider = new UserProvider();

module.exports = userProvider;
