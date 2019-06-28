const express = require('express');
const router = express.Router();
const Simple =  require('../data/models/simple')
const axios = require('axios');
const request = require('request');
router.post('/prop', (req, res) => {
    Simple.add(req.body)
        .then(simple => {
            if (simple) {
                res.status(200).json(simple)
            } else {
                res.status(404).json({ error: ' Could not add that property' });
            }
        })
        .catch(error =>
            res.status(500).send(error))
})

router.post('/simpleprediction', (req, res) => {
    axios
        .post("http://flask-env.kmg6svp6sr.us-east-2.elasticbeanstalk.com/simpleprediction", {
            headers: { accept: "application/json" },
            zipcode: req.body.zipcode.toString(),
            bedrooms: parseFloat(req.body.bedrooms),
            bathrooms: parseFloat(req.body.bathrooms)
        })
        .then(response =>
            res.status(200).json(response.data))
    
        .catch(err => res.status(500).json(err.response));
})
router.post("/purefunroute", async (req, res) => {
    try {
        request.post(
            {
                headers: { "content-type": "application/json" },
                url:
                    "http://flask-env.kmg6svp6sr.us-east-2.elasticbeanstalk.com/simpleprediction",
                body: JSON.stringify    ({zipcode: req.body.zipcode.toString(),
                    bedrooms: parseFloat(req.body.bedrooms),
                    bathrooms: parseFloat(req.body.bathrooms)})
            },
            (error, response, body) => {
                if (error) {
                    return console.error(error);
                }
                console.log(body);
                res.status(200).json(JSON.parse(body));
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "error" });
    }
});

module.exports = router;

/*
router.get('/', (req, res) => {
    Simple.find()

})
*/

/*
router.post("/", async (req, res) => {
    try {
        request.post(
            {
                headers: { "content-type": "application/json" },
                url:
                    "http://flask-env.9kbtud3pm3.us-east-2.elasticbeanstalk.com/simpleprediction",
                body: JSON.stringify({
                    zipcode: "90210",
                    bathrooms: 5.0,
                    bedrooms: 2.0
                })
            },
            (error, response, body) => {
                if (error) {
                    return console.error(error);
                }
                console.log(body);
                res.status(200).json(body);
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "error" });
    }
});
*/
module.exports = router;