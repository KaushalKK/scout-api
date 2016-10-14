"use strict";

var express = require('express');

module.exports = function (config) {
    var router = express.Router();
    var db = require('../db/index.js')(config.dbConfig);

    var userResource = require('./users');
    var teamResource = require('./teams');
    var eventResource = require('./events');

    userResource(router, db).configureRoutes();
    teamResource(router, db).configureRoutes();
    eventResource(router, db).configureRoutes();

    return router;
};