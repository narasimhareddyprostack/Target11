const express = require("express");
const User = require("../model/User");
const router = express.Router();

const bcrypt = require("bcryptjs");
/*
  Name API: localhost:5000/user/register
  Method: POST
  Field: NAME, EMAIL, PASSWORD
*/
router.post("/register", async (req, resp) => {
  try {
    // Reading Body Data
    let { name, email, password } = req.body;
    /* console.log(name, email, password); */
    //User Existed or not
    let user = await User.findOne({ email: email });
    if (user) {
      return resp.status(401).json({ error: "User Already Existed" });
    }
    let salt = await bcrypt.genSaltSync(10);
    password = await bcrypt.hash(password, salt);

    //Save the form data in collection
    user = new User({ name, email, password });
    user = await user.save();
    resp.status(200).json({ result: "Success", user: user });
  } catch (err) {
    if (err) throw err;
    resp.status(500).json({ error: "Server Error" });
  }
});
router.post("/login", (req, resp) => {
  //logic
  resp.send("<h2> Login Req</h2>");
});
module.exports = router;
