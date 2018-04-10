var Question = require('mongoose').model("question")
var utils = require('../utils/utils');

exports.findQuestionList = function (req, res, next) {
    var {page_number,page_size} = req.body;
    page_number || (page_number = 0);
    page_size || (page_size = 10);
    Question.find().skip(page_number*page_size).limit(page_size)
        .then((data) => {
            utils.abortAndSendJsonToClient(null, req, res, data)
        })
        .catch(err => {
            utils.abortAndSendJsonToClient(err, req, res, null)
        })
};

exports.saveQuestionList = function (req, res, next) {
    var question = new Question(req.body);
    question.save()
        .then(() => {
            utils.abortAndSendJsonToClient(null, req, res, {_id: Question._id})
        })
        .catch(err => {
            utils.abortAndSendJsonToClient(err, req, res, null)
        })
};

exports.deleteQuestionList = function (req, res, next) {
    if (!req.body.listId) {
        utils.abortAndSendJsonToClient(new Error("List id is null"), req, res, null)
    }
    Question.remove({_id: req.body.listId})
        .then(() => {
            utils.abortAndSendJsonToClient(null, req, res, {_id: Question._id})
        })
        .catch(err => {
            utils.abortAndSendJsonToClient(err, req, res, null)
        })
};