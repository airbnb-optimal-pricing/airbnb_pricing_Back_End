const express = require('express');
const router = express.Router();
const Simple =  require('../data/models/simple')

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