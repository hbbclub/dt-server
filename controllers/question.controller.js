var Question = require('mongoose').model("Question")
var utils = require('../utils/utils');

exports.findQuestionList = function (req, res, next) {
    var {page_number, page_size} = req.body;
    page_number || (page_number = 0);
    page_size || (page_size = 10);
    Question.find().skip(page_number * page_size).limit(page_size)
        .then((data) => {
            return utils.sendJsonToClient(null, req, res, data)
        })
        .catch(err => {
            return utils.sendJsonToClient(err, req, res, null)
        })
};

exports.addQuestionList = function (req, res, next) {
    var question = new Question(req.body);
    question.save()
        .then(() => {
            return utils.sendJsonToClient(null, req, res, {_id: Question._id})
        })
        .catch(err => {
            return utils.sendJsonToClient(err, req, res, null)
        })
};

exports.deleteQuestionList = function (req, res, next) {
    utils.assertMustParameter(req,res,["listId"])
    Question.remove({_id: req.body.listId})
        .then(() => {
            return utils.sendJsonToClient(null, req, res, {_id: Question._id})
        })
        .catch(err => {
            return utils.sendJsonToClient(err, req, res, null)
        })
};