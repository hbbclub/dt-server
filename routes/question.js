var express = require('express');
var router = express.Router();
var question = require("../controllers/question.controller");

router.route("/addQuestionList")
    .post(question.addQuestionList);
router.route("/deleteQuestionList")
    .post(question.deleteQuestionList);
router.route("/findQuestionList")
    .post(question.findQuestionList);
module.exports = router;
