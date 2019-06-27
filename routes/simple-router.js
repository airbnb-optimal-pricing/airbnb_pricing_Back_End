const router = express.Router();
const request = require("request");
const Simple =  require('../data/models/simple')


router.get('/', (req, res) => {
    Simple.find()

})



router.post("/", async (req, res) => {
    try {
        request.post(
            {
                headers: { "content-type": "application/json" },
                url:
                    "http://flask-env.9kbtud3pm3.us-east-2.elasticbeanstalk.com/simpleprediction",
                body: JSON.stringify({req.body})
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

module.exports = router;