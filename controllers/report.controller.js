var Report = require('mongoose').model("Report")
var utils = require('../utils/utils');

exports.addReport = function (req, res, next) {
    utils.assertMustParameter(req, res, ["user","qsList"]);

    var report = new Report(req.body);
    report.save()
        .then(() => {
            return utils.sendJsonToClient(null, req, res, {_id: report._id})
        })
        .catch(err => {
            return utils.sendJsonToClient(err, req, res, null)
        })
};

exports.findReport = function (req, res, next) {
    utils.assertMustParameter(req, res, ["_id"]);
    Report.findReportById(req.body._id).then((data) => {
        return utils.sendJsonToClient(null, req, res, data)
    }).catch(err => {
        return utils.sendJsonToClient(err, req, res, null)
    });
};


exports.findReportByUserId = function (req, res, next) {
    utils.assertMustParameter(req, res, ["_id"]);
    Report.findReportByUserId(req.body._id).then((data) => {
        return utils.sendJsonToClient(null, req, res, data)
    }).catch(err => {
        return utils.sendJsonToClient(err, req, res, null)
    });

};