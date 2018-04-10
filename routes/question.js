var express = require('express');
var router = express.Router();
var question = require("../controllers/question.controller");

router.route("/saveQuestionList")
    .post(question.saveQuestionList);
router.route("/deleteQuestionList")
    .post(question.deleteQuestionList);
router.route("/findQuestionList")
    .post(question.findQuestionList);
module.exports = router;
