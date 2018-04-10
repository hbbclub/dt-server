var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('mongoose').model('User');

module.exports = function () {
    passport.use(new LocalStrategy(
        {
            usernameField: "phone",
            passwordField: "password"
        },
        (account, password, done) => {
            User.findOne({account, password})
                .then(u => {
                    if (!u)
                        return done(null, false, {
                            msg: "用户名或密码不正确!"
                        });
                    else
                        return done(null, u);
                })
        }
    ))
}