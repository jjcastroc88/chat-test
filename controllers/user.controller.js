const userProvider = require('../providers/userProvider');

const login = async (req, res) => {
  try {
    const user = await userProvider.login(req.body);

    res.status(200).send(user);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const register = async (req, res) => {
  try {
    const user = await userProvider.create(req.body);

    res.status(200).send(user);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

module.exports = {
  login,
  register,
};
