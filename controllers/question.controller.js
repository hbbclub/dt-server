var Question = require('mongoose').model("question")
var utils = require('../utils/utils');

exports.saveQuestionList = function (req, res, next) {
    var Question = new Question(req.body);
    Question.save()
        .then(() => {
            utils.abortAndSendJsonToClient(null,req,res,{_id: Question._id})
        })
        .catch(err => {
            utils.abortAndSendJsonToClient(err,req,res,null)
        })
}

