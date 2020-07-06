// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const socket = require('socket.io-client')('http://localhost:3100');
const { ActivityHandler } = require('botbuilder');

class EchoBot extends ActivityHandler {
  constructor() {
    super();

    this.onMessage(async (context, next) => {
      const message = context.activity.text;
      socket.emit('user_join', 'CommandBot');

      if (message.indexOf('/stock=') === 0) {
        const command = message.split('=');
        fetch(`https://stooq.com/q/l/?s=${command[1]}&f=sd2t2ohlcv&h&e=csv`, {
          method: 'GET',
        })
          .then(async response => {
            const result = await response.text();
            const data = result.split('\n');
            const headers = data[0].split(',');
            const values = data[1].split(',');
            const dataObj = {};
            for (let i = 0; i < headers.length; i++) {
              dataObj[headers[i].toLowerCase()] = values[i];
            }

            socket.emit(
              'message',
              `${dataObj.symbol} quote is $${dataObj.low} per share`,
            );
          })
          .catch(e => {
            console.log(e);
          });
      } else {
        socket.emit(
          'message',
          `you say ${message}, Sorry I don't understand try again`,
        );
      }
    });
  }
}

module.exports.EchoBot = EchoBot;
