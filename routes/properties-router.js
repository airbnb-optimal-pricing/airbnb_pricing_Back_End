const express = require('express');
const router = express.Router();

const restricted = require('../helpers/auth/restricted');

const Properties = require('../data/models/properties');

router.get('/', (req, res) => {
    Properties.find()
        .then(properties => {
            if (properties) {
                res.status(200).json(properties)
            } else {
                res.status(404).json({ error: 'Could not find properties' });
            }
        })
        .catch(error =>
            res.status(500).send(error))
})

router.get('/:id', restricted, (req, res) => {
    Properties.findById(req.params.id)
        .then(properties => {
            if (properties) {
                res.status(200).json(properties);
            } else {
                res.status(404).json({ error: 'Could not find properties' });
            }
        })
        .catch(error =>
            res.status(500).send(error))
})

router.get('/:id/properties', restricted, (req, res) => {
    Properties.findPropertiesByUserId(req.params.id)
        .then(userProperties => {
            if (userProperties) {
                res.status(200).json(userProperties)
            } else {
                res.status(404).json({ error: 'Could not find properties' });
            }
        })
        .catch(error =>
            res.status(500).send(error))
})

router.put('/:id', restricted, (req, res) => {
    let properties = req.body;
    let id = req.params.id;
    Properties.update(properties, id)
        .then(updated => {
            if (updated) {
                res.status(200).json({ message: 'Updated Property' });
            } else {
                res.status(404).json({ message: 'Could not update Property' })
            }
        })
        .catch(error =>
            res.status(500).send(error))
})

router.delete('/:id', restricted, (req, res) => {
    Properties.remove(req.params.id)
        .then(deleted => {
            if (deleted) {
                res.status(200).json({ message: 'Propertu successfully deleted' });
            } else {
                res.status(404).json({ message: 'Could not delete user.' })
            }
        })
        .catch(error =>
            res.status(500).send(error))
});

module.exports = router;