const messages = http => {
  const io = require('socket.io')(http);

  io.on('connection', socket => {
    socket.on('user_join', user => {
      socket = {
        ...socket,
        user,
      };

      io.emit('is_online', `The user ${socket.user} has joined`);
    });

    socket.on('disconnect', user => {
      io.emit('is_online', `🔴 <i>${user} ha dejado el chat ..</i>`);
    });

    socket.on('message', message => {
      io.emit('message', `<strong>${socket.user}</strong>: ${message}`);
    });
  });
};

module.exports = messages;
