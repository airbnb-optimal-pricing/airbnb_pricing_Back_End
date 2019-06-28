const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();
const Properties = require('../../data/models/properties');
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
router.post('/userproperties', restricted, (req, res) => {
    axios
        .post("http://flask-env.kmg6svp6sr.us-east-2.elasticbeanstalk.com/prediction", {
            headers: { accept: "application/json" },
            zipcode: req.body.zipcode.toString(),
            bedrooms: parseFloat(req.body.bedrooms),
            bathrooms: parseFloat(req.body.bathrooms),
            property_type: req.body.property_type.toString(),
            room_type: req.body.room_type.toString(),
            accommodates: (req.body.accommodates),
            beds: (req.body.beds),
            bed_type: req.body.bed_type.toString()
        })
        .then(response =>
            res.status(200).json(response.data))

        .catch(err => res.status(500).json(err.response));
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
