"use strict";

var bcrypt = require("bcryptjs");

module.exports = function (router, db) {
    return {
        "configureRoutes": function () {
            var resource = "/user";

            router.put(resource, function (req, res) {
                var userInput = {
                    alias: req.body.alias,
                    name: req.body.name || '',
                    team: req.body.team,
                    password: bcrypt.hashSync(req.body.password, 10)
                };
                var userDetails = new db.models.Users(userInput);

                userDetails.save().exec()
                    .then(function (userDetails) {
                        res.status(201).send(userDetails);
                    })
                    .catch(function (err) {
                        res.status(400).send('Failed to create user.');
                    });
            });
        }
    };
};