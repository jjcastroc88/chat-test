require('dotenv').config();
const jwt = require('jsonwebtoken');

const authorizeUser = user => {
  const { id, email, name } = user;
  return {
    email,
    name,
    token: jwt.sign(
      {
        id: id,
        email: email,
      },
      process.env.JWT_KEY,
      { expiresIn: process.env.JWT_EXPIRATION },
    ),
  };
};

const verifyUser = token => jwt.verify(token, process.env.JWT_KEY);

module.exports = {
  authorizeUser,
  verifyUser,
};
