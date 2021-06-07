const express = require("express");

const router = express.Router();

router.post("/registration", (req, resp) => {
  //logic
  resp.send("<h2> Registration Req</h2>");
});
router.post("/login", (req, resp) => {
  //logic
  resp.send("<h2> Login Req</h2>");
});
module.exports = router;
