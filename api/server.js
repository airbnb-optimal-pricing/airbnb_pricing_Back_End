const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const usersRouter= require('../routes/users-router');
const authRouter = require("../routes/auth/auth");

const server = express();

server.use(express.json());
server.use(helmet());

server.use(cors({
    credentials: true,
}));
server.use('/api/users', usersRouter)
server.use('/auth', authRouter)



server.get('/', (req, res) => {
    res.send('hello the server is up and running')
});


module.exports = server;