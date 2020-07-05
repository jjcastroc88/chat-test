const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
/* eslint-disable-next-line no-undef */
const basename = path.basename(__filename);
const config = require('../config/config').develop;
const db = {};

const sequelizeClient = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  config.db,
);

/* eslint-disable-next-line no-undef */
fs.readdirSync(__dirname)
  .filter(
    file =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js',
  )
  .forEach(file => {
    /* eslint-disable-next-line no-undef */
    const model = sequelizeClient.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelizeClient;

module.exports = db;
