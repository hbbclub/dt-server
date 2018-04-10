var express = require('express');
var router = express.Router();
var question = require("../controllers/question.controller");

router.route("/saveQuestionList")
    .post(question.saveQuestionList)

module.exports = router;
