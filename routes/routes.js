const routerWhite = require('express').Router();
const router = require('express').Router();
const bodyParser = require('body-parser');
const { login, register } = require('../controllers/user.controller');
const { validRequest } = require('../middlewares/auth.middleware');

const api = app => {
  routerWhite.get('/', (req, res) => res.render('index.ejs'));
  routerWhite.get('/signup', (req, res) => res.render('signup.ejs'));
  routerWhite.get('/chat', (req, res) => res.render('chat.ejs'));
  router.post(
    '/login',
    [
      bodyParser.urlencoded({
        extended: false,
      }),
      bodyParser.json(),
    ],
    login,
  );
  router.post(
    '/user',
    [
      bodyParser.urlencoded({
        extended: false,
      }),
      bodyParser.json(),
    ],
    register,
  );
  router.get('/hello', validRequest, (req, res) => res.send('valido'));
  app.use(routerWhite);
  app.use('/api/v1', router);
};

module.exports = api;
