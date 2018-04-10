var config = require('./config');
const fs = require('fs');
const join = require('path').join;
var mongoose = require('mongoose'),
    Promise = require('promise');

const models = join(__dirname, '../models');

mongoose.Promise = Promise;

var db = mongoose.connect(config.db, {config: {autoIndex: false}});

fs.readdirSync(models)
    .filter(file => ~file.search(/^[^\.].*\.js$/))
    .forEach(file => {
        require(join(models, file))
    });

module.exports = db;