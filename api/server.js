const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const usersRouter= require('../routes/users-router');
const authRouter = require("../routes/auth/auth");

const server = express();
const  allowedOrigins = ['http://someorigin.com',
    'http://anotherorigin.com',
    'http://localhost:3000'];

server.use(express.json());
server.use(helmet());


server.use(cors({

    origin: function (origin, callback) {
        // allow requests with no origin
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },

    exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'],

    credentials: true,
}));

server.use('/api/users', usersRouter)
server.use('/auth', authRouter)



server.get('/', (req, res) => {
    res.send('hello the server is up and running')
});


module.exports = server;