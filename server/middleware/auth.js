const jwt = require('jsonwebtoken')

function authUser(req,res,next){
    const token = req.headers.authorization;
    try {
        if (!token) {
          return res.status(403).send("cant find token");
        }
        const bearerToken = token.split(" ")[1];
        const decodeToken = jwt.verify(bearerToken, process.env.JWT_PRIVATE_KEY);
        req.data = decodeToken;
    } catch (error) {
        return res.status(401).send("Invalid Token")
    }
    return next();
}

module.exports = authUser