"use strict";

let mongoose = require('mongoose');

module.exports = (dbConfig) => {
    let options = { promiseLibrary: require('q') };
    let db = mongoose.connect(dbConfig, options);

    mongoose.Promise = require('q').Promise;

    let schema = require('./schema')(mongoose);
    let models = require('./models')(mongoose, schema);

    let connection = mongoose.connection;
    connection.on('error', console.error.bind(console, 'connection error:'));
    connection.once('open', function () {
        // we're connected!
        console.log("DB Connected!");
    });

    process.on('SIGTERM', function () {
        setTimeout(function () {
            connection.close();
        }, 1000);
    });

    return db;
}