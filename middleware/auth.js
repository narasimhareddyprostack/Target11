const jwt = require("jsonwebtoken");

let auth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Un Authorized Access - No Headers");
  }
  let token = req.headers.authorization.split(" ")[1];
  console.log(token);

  if (token == null) {
    return res.status(401).send("Un Authorized Access - Token Null");
  }
  let payload = jwt.verify(token, process.env.Secret_KEY);
  console.log("Auth ... ", payload.user);

  if (!payload) {
    return res.status(200).json("Un Authorized Access");
  }
  req.user = payload.user;
  next();
};

module.exports = auth;
