let socket;

$('.form-signin').submit(e => {
  e.preventDefault();
  const email = $('#email').val(),
    password = $('#password').val();

  requestPost('login', { email, password }).then(result => {
    if (result.status === 500) {
      alert(result.statusText);
    } else if (result.status === 200) {
      processUser(result);
    }
  });
  return false;
});

$('.form-signup').submit(e => {
  e.preventDefault();
  const email = $('#email').val(),
    password = $('#password').val(),
    name = $('#name').val();

  requestPost('user', { email, password, name })
    .then(async result => {
      if (result.status === 500) {
        alert(result.statusText);
      } else if (result.status === 200) {
        processUser(result);
      }
    })
    .catch(e => {
      console.log(e);
    });
  return false;
});

$('.form-chat').submit(e => {
  e.preventDefault();
  socket.emit('message', $('#txt').val());
  $('#txt').val('');

  return false;
});

const processUser = async result => {
  result.json().then(user => {
    setUser(user);
    window.location.href = '/chat';
  });
};

const connectUser = () => {
  const user = getUser();
  socket = io.connect('http://localhost:3100');
  socket.emit('user_join', user.name);
  socket.on('message', msg => {
    $('#messages').append($('<li>').html(msg));
  });

  socket.on('is_online', user => {
    $('#messages').append($('<li>').html(user));
  });
};
