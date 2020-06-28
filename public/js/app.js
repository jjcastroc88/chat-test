const socket = io.connect('http://localhost:3100');
socket.emit('user_join', `user_${new Date().getTime()}`);

$('form').submit(e => {
  e.preventDefault();
  socket.emit('message', $('#txt').val());
  $('#txt').val('');
  return false;
});

socket.on('message', msg => {
  $('#messages').append($('<li>').html(msg));
});

socket.on('is_online', user => {
  $('#messages').append($('<li>').html(user));
});
