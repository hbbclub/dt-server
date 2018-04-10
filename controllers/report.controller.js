var Report = require('mongoose').model("Report")
var utils = require('../utils/utils');

exports.addReport = function (req, res, next) {
    var report = new Report(req.body);
    report.save()
        .then(() => {
            utils.abortAndSendJsonToClient(null, req, res, {_id: report._id})
        })
        .catch(err => {
            utils.abortAndSendJsonToClient(err, req, res, null)
        })
};


exports.findReport = function (req, res, next) {
    utils.assertMustParameter(req, res, ["_id"]);
    Report.findReportById(req.body._id).then((data) => {
        utils.abortAndSendJsonToClient(null, req, res, data)
    }).catch(err => {
        utils.abortAndSendJsonToClient(err, req, res, null)
    });
};
