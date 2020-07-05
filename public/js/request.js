const API_URL = 'http://localhost:3100/api/v1/';

const requestPost = async (path, body, headers) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(body),
  };

  return fetch(`${API_URL}${path}`, options)
    .then(result => {
      return result;
    })
    .catch(e => {
      return e;
    });
};

const requestGet = async (path, headers) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  return fetch(`${API_URL}${path}`, options)
    .then(result => {
      return result;
    })
    .catch(e => {
      return e;
    });
};
