const express = require('express');
const app = express();
require('./routes/routes')(app);
/* eslint-disable-next-line no-undef */
app.use(express.static(`${__dirname}/public`));
const http = require('http').Server(app);
require('./services/messages')(http);

const PORT = 3100;

http.listen({ port: PORT }, () =>
  console.log('🚀 Server ready at http://localhost:3100'),
);
