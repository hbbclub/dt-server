var User = require('mongoose').model("User"),
    passport = require('passport');
var utils = require('../utils/utils');

exports.signup = function (req, res, next) {
    var user = new User(req.body);
    user.save()
        .then(() => {
           utils.abortAndSendJsonToClient(null,req,res,{_id: user._id})
        })
        .catch(err => {
            utils.abortAndSendJsonToClient(err,req,res,null)
        })
}

exports.signin = function (req, res, next) {
    passport.authenticate(
        "local",
        function (err, user, info) {
            if (!user) {
                utils.abortAndSendJsonToClient(new Error(info.msg),req,res,null)
            }
            utils.abortAndSendJsonToClient(err,req,res,{_id: user._id})
        }
    )(req, res, next);
}
