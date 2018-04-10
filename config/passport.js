var passport = require('passport'),
    User = require('mongoose').model('User');

module.exports = function () {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    passport.deserializeUser((_id, done) => {
        User.findOne({_id})
            .then(u => {
                done(null, u);
            })
    });
    require("./strategies/local")();
}