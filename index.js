const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
const http = require('http').Server(app);
const io = require('socket.io')(http);

const PORT = 3100;

app.get('/', (req, res) => res.render('index.ejs'));

io.on('connection', socket => {
  socket.on('user_join', user => {
    socket = {
      ...socket,
      user,
    };

    io.emit(`The user ${socket.user} has joined`);
  });

  socket.on('disconnect', user => {
    io.emit('is_online', '🔴 <i>' + socket.user + ' ha dejado el chat ..</i>');
  });

  socket.on('message', message => {
    io.emit('message', '<strong>' + socket.user + '</strong>: ' + message);
  });
});

http.listen({port: PORT}, () =>
  console.log(`🚀 Server ready at http://localhost:3100`),
);
