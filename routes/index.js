"use strict";

let express = require('express');

module.exports = (config) => {
    let router = express.Router();
    let db = require('../db/index.js')(config.dbConfig);

    let authResource = require('./auth');

    let userResource = require('./users');
    let teamResource = require('./teams');
    let eventResource = require('./events');

    authResource(router, db).configureRoutes();
    userResource(router, db).configureRoutes();
    teamResource(router, db).configureRoutes();
    eventResource(router, db).configureRoutes();

    return router;
};