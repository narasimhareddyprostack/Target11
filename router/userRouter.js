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
    console.log(user);
    user = await user.save();
    resp.status(200).json({ result: "Success", user: user });
  } catch (err) {
    if (err) throw err;
    resp.status(500).json({ error: "Server Error" });
  }
});
/*
API Name: localhost:5000/user/login
Method : POST
Fields: Email, Password
*/
router.post("/login", async (req, resp) => {
  try {
    // read form data
    let { email, password } = req.body;
    //Verify Register Usr or Not (using Email)
    let user = await User.findOne({ email: email });
    if (!user) {
      return resp.status(400).json({ error: "User Account Not Available" });
    }
    //verify the password
    let result = await bcrypt.compare(password, user.password);
    //console.log(result);
    if (!result) {
      return resp.status(400).json({ status: " Password Not Matches" });
    }
    let payload = {
      user: { id: user.id },
    };
    console.log(payload, "Payload");
  } catch (err) {
    if (err) throw err;
    resp.status(500).json({ error: "Server Error" });
  }
});
module.exports = router;
