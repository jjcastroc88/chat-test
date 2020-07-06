Chat-test

## Prerequisites

- mysql
- node version 12.18.1

## Install chat test

- create a new database chat_test
- execute chat_test.sql script
- yarn install

## Install bot

- cd bot
- yarn install
- yarn start

## To run the chat

- rename .env-example
- yarn start after that you can go to http://localhost:3100/
- sign in or sign up to access to the chat

## Notes

- Two test the chat open many instance as you want

## Pending

- Implement RabbitMQ, the message from bot is using socket.io
- Show only 50 message
- Have more than one chatroom
- UT

## I did

- Sign In and Sign Up user, using jwt y bcrypt
  jwt to generate token for session
  bcrypt to encode the password user
- Chat connection using socket.io
- Bot implementation with bot framework from microsoft generating a echo template
  I modified to handle the commands
- Messages show in order
