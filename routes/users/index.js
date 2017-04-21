"use strict";

let bcrypt = require("bcryptjs");

module.exports = (router, db) => {
    const user = db.models.user;

    return {
        "configureRoutes": function () {
            const resource = "/user";

            router.put(resource, (req, res) => {
                let userInput = {
                    alias: req.body.alias,
                    name: req.body.name || '',
                    team: req.body.team,
                    password: bcrypt.hashSync(req.body.password, 10)
                };
                let userDetails = new user(userInput);

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