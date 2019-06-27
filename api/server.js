const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const usersRouter= require('../routes/users-router');
const authRouter = require("../routes/auth/auth");
const propRouter = require('../routes/properties-router');
//const simpleRouter = require('../routes/simple-router');
const server = express();


server.use(express.json());
server.use(helmet());


server.use(cors());

server.use('/api/users', usersRouter)
server.use('/auth', authRouter)
server.use('/properties', propRouter)
//server.use('/simple',simpleRouter )


server.get('/', (req, res) => {
    res.send('AirBnB Server is running')
});


module.exports = server;