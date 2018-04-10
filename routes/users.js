var express = require('express');
var router = express.Router();
var user = require("../controllers/users.controller")

router.route("/signup")
    .post(user.signup)
router.route("/signin")
    .post(user.signin)

module.exports = router;
