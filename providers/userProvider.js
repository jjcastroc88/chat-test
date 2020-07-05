const { User } = require('../models');

class UserProvider {
  async createUser(userData) {
    const userCreated = await User.create(userData);
    return userCreated;
  }

  async login({ email, password }) {
    const user = await User.findOne({ where: { email } });
    return user.password === password;
    // const valid = await bcrypt.compare(password, user.password);
  }
  async create({ email, password, name }) {
    const user = await User.create({ email, password, name });
    return user;
  }
}

const userProvider = new UserProvider();

module.exports = userProvider;
