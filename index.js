// implement your API here

const express = require('express');

const db = require('./data/db');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send('Hello World')
})

server.get('/api/users', (req, res) => {
  db
    .find()
    .then(users => {
      res.status(201).json(users)
    })
    .catch(({ code, message }) => {
      res.status(code).json({ success: false, message })
    })
})

server.listen(4000, () => {
  console.log(`\n*** Server Running on http://localhost:4000 ***\n`)
});