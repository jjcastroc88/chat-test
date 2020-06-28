const io = require('socket.io');
const socket = io.connect('http://localhost:3100');
// enviar mensaje de texto sin recargar/reiniciar la página

$('form').submit(function (e) {
  e.preventDefault(); // evitar recarga página
  socket.emit('message', $('#txt').val());
  $('#txt').val('');
  return false;
});
// Añadir mensaje texto al chat
socket.on('message', function (msg) {
  $('#messages').append($('<li>').html(msg));
});
// Añadir texto si alguien está online
socket.on('is_online', function (user) {
  $('#messages').append($('<li>').html(user));
});
// Preguntar el nombre de usuario
var user = prompt('Dime tu nombre, por favor');
socket.emit('user', user);
