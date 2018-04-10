var express = require('express');
var router = express.Router();
var report = require("../controllers/report.controller");

router.route("/addReport")
    .post(report.addReport);
router.route("/findReport")
    .post(report.findReport);

module.exports = router;
