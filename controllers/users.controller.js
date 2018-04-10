var User = require('mongoose').model("User"),
    passport = require('passport');
var utils = require('../utils/utils');

exports.signup = function (req, res, next) {
    var user = new User(req.body);
    user.save()
        .then(() => {
            return utils.sendJsonToClient(null, req, res, {_id: user._id})
        })
        .catch(err => {
            return utils.sendJsonToClient(err, req, res, null)
        })
}

exports.signin = function (req, res, next) {
    passport.authenticate(
        "local",
        function (err, user, info) {
            if (!user) {
                return utils.sendJsonToClient(new Error(info.msg), req, res, null)
            }
            return utils.sendJsonToClient(err, req, res, {_id: user._id})
        }
    )(req, res, next);
}
