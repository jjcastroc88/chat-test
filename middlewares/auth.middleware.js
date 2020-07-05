const { verifyUser } = require('../services/auth');

const validRequest = (req, res, next) => {
  try {
    const auth = req.headers.authorization.split(' ');
    verifyUser(auth[1]);
  } catch (error) {
    res.status('403').send('invalid user');
  }

  next();
};

module.exports = {
  validRequest,
};
