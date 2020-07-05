const router = require('express').Router();
const bodyParser = require('body-parser');
const userProvider = require('../providers/userProvider');

const api = app => {
  router.get('/', (req, res) => res.render('index.ejs'));

  router.post(
    '/login',
    [
      bodyParser.urlencoded({
        extended: false,
      }),
      bodyParser.json(),
    ],
    async (req, res) => {
      const user = await userProvider.login(req.body);

      res.send(user);
    },
  );

  router.post(
    '/user',
    [
      bodyParser.urlencoded({
        extended: false,
      }),
      bodyParser.json(),
    ],
    async (req, res) => {
      const user = await userProvider.create(req.body);

      res.send(user);
    },
  );

  app.use(router);
};

module.exports = api;
