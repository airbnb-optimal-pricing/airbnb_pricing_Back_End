const express = require('express');
const router = express.Router();


const Users= [{

}]

router.get('/users', (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})
*/