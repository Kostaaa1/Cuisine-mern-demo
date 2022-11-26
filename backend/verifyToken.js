const jwt = require("jsonwebtoken");

function verify(req, res, next) {
    const headersReq = req.headers.token;
    if (headersReq) {
        const token = headersReq.split(" ")[1];

        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) res.status(403).json("Token is not Valid!");
            req.user = user;
            next();
        });
    } else {
        res.status(401).json("You are not authenticated!");
    }
}

module.exports = verify;
