"use strict";

var express = require('express');

module.exports = (config) => {
    var router = express.Router();
    var db = require('../db/index.js')(config.dbConfig);

    var authResource = require('./auth');

    var userResource = require('./users');
    var teamResource = require('./teams');
    var eventResource = require('./events');

    authResource(router, db).configureRoutes();
    userResource(router, db).configureRoutes();
    teamResource(router, db).configureRoutes();
    eventResource(router, db).configureRoutes();

    return router;
};