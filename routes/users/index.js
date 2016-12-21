"use strict";

var bcrypt = require("bcryptjs");

module.exports = (router, db) => {
    return {
        "configureRoutes": function () {
            const resource = "/user";

            router.put(resource, (req, res) => {
                var userInput = {
                    alias: req.body.alias,
                    name: req.body.name || '',
                    team: req.body.team,
                    password: bcrypt.hashSync(req.body.password, 10)
                };
                var userDetails = new db.models.Users(userInput);

                userDetails.save()
                    .then((userDetails) => {
                        res.status(201).send(userDetails);
                    })
                    .catch(() => {
                        res.status(400).send('Failed to create user.');
                    });
            });
        }
    };
};