const jwt = require("jsonwebtoken");

async function authUser(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(403).send("Cannot find token");
  }

  try {
    const bearerToken = token.split(" ")[1];
    const decodedToken = await jwt.verify(bearerToken,process.env.JWT_PRIVATE_KEY);
    req.data = decodedToken;
  } catch (error) {
    return res.status(401).send("Invalid token");
  }

  next();
}

module.exports = authUser;
