const jwt = require('jsonwebtoken');

module.exports = (req, res, next ) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({error: 'You have no access.'});
            } else {
                req.user = {username : decodedToken.username};
                next();
            }
        })
    } else {
        res.status(401).json({error: 'You have no access.'})
    }
}