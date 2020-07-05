require('dotenv').config();

module.exports = {
  develop: {
    db: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: process.env.DIALECT,
    },
  },
};
