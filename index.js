require("dotenv").config();

const server = require('./api/server.js');

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`\n** Server is running on http://localhost:${port} **\n`));


// require('dotenv').config()
// const path = require('path')
// const express = require('express')

// const server = require('./api/server')

// const port = process.env.PORT || 5000

// server.use(express.static(path.join(__dirname, 'client/dist')))

// server.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/dist', 'index.html'))
// })

// server.listen(port, () => {
//   console.log('listening on ' + port)
// })