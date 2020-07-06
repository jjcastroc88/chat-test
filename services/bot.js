const fetch = require('node-fetch');
const API_BOT = 'http://localhost:3978/api/';

const bodyRequest = {
  channelData: {
    clientActivityID: '1593997116027ef7f76urob4',
    clientTimestamp: '2020-07-06T00:58:36.027Z',
  },
  channelId: 'api',
  conversation: {
    id: 'cc8af200-bf23-11ea-b9e8-9d9f9f1bb736|livechat',
  },
  entities: [
    {
      requiresBotState: true,
      supportsListening: true,
      supportsTts: true,
      type: 'ClientCapabilities',
    },
  ],
  from: {
    id: 'f9312d7a-946f-485e-8e5c-1e6f4e43cbbc',
    name: 'User',
    role: 'user',
  },
  id: 'd23f5d30-bf23-11ea-b9e8-9d9f9f1bb736',
  localTimestamp: '2020-07-05T19:58:36-05:00',
  locale: 'en-US',
  recipient: {
    id: 'cc8859f0-bf23-11ea-a816-c1523bff5696',
    name: 'Bot',
    role: 'bot',
  },
  serviceUrl: 'http://localhost:3100',
  textFormat: 'plain',
  timestamp: '2020-07-06T00:58:36.035Z',
  type: 'message',
};

const callBot = async message => {
  bodyRequest.text = message;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyRequest),
  };

  return fetch(`${API_BOT}messages`, options).catch(e => e);
};

module.exports = {
  callBot,
};
