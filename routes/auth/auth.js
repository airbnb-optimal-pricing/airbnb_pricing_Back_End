const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();
//const Properties = require('../../data/models/properties');
const Users = require('../../data/models/users');
const secrets = require('../../helpers/config/keys');

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password= hash;

    Users.add(user)
    .then(saved => {
        res.status(201).json(saved)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

router.post('/login', (req, res) => {
    let {username, password}= req.body;
    Users.findBy({username})
    .first()
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)){
            const token = generateToken(user);
            res.status(200).json({user, token});
        } else {
            res.status(401).json({
                message: 'Invalid credentials'
            })
        }
    })
    .catch(error => 
        res.status(500).json(error));
})
function generateToken(user) {
    const payload= {
        subject: user.id,
        username: user.username,
    }
    const options = {
        expiresIn: '1d',
    }

    return jwt.sign(payload, secrets.jwtSecret, options)
}


module.exports = router;
