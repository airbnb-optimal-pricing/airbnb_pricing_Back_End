const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const usersRouter= require('../routes/users-router');
const authRouter = require("../routes/auth/auth");

const server = express();

server.use(express.json());
server.use(helmet());

server.use(cors());
server.use('/api/users', usersRouter)
server.use('/auth', authRouter)
const properties = [
    {
        id: 0,
        "title": 'Southside Hacienda',
        "bedrooms": 3,
        "baths": 2,
        "sqfoot": 1500,
        "pool" :" yes", 
        "askingPrice": 740
    },
    {
        id: 1,
        "title": 'Magic Mountain Mirage',
        "bedrooms": 4,
        "baths": 5,
        "sqfoot": 2500,
        "pool": " yes",
        "askingPrice": 850
    },
    {
        id: 2,
        "title": 'Bluff Creek Escape', 
        "bedrooms": 3,
        "baths": 2,
        "sqfoot": 2500,
        "pool": " yes",
        "askingPrice": 1050 
    },
    {
        id: 3,
        "title": 'Neighborhood Chalet',
        "bedrooms": 9,
        "baths": 12,
        "sqfoot": 4500,
        "pool": " yes",
        "askingPrice": 1500
    },

]



server.get('/', (req, res) => {
    res.send('hello the server is up and running')
});

server.post('/properties', (req, res) => {
    const {title, bedrooms, baths, sqfoot, pool, askingPrice}= req.body;
    const newProperty = { title, bedrooms, baths, sqfoot, pool, askingPrice };
    if (!title || !bedrooms || !baths || !sqfoot || !askingPrice ){
        res.status(422).json({ message: "Whoops you forgot to list all of the features"})
    } else {
        properties.push(newProperty);
        res.status(201).json(properties)
    }
})

server.get('/properties', (req, res)=> {
    res.status(200).json(properties);
})

server.get('/properties/:id', (req, res)=> {
    const id= req.params.id;
    const property = properties.map(property =>{
        if(property.id === id) {
            return property;
        }
    })
})

module.exports = server;