"use strict";

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const fs = require("fs");

module.exports = (router, db) => {
    const user = db.models.user;

    return {
        "configureRoutes": function () {
            const resource = "/user";
            const cert = fs.readFileSync("keys/public_key");

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

            router.post(resource + "/login", (req, res) => {
                let loginResult = false;
                let options = {
                    "algorithm": "RS256",
                    "expiresIn": "1h",
                    "issuer": "frcscout"
                };

                let username = req.body.username;
                let password = req.body.password;

                user.findOne({ alias: username })
                    .then((userDetails) => {
                        loginResult = bcrypt.compareSync(password, userDetails.password);

                        let payload = {
                            user: username,
                            team: userDetails.team
                        };


                        if (loginResult) {
                            jwt.sign(payload, cert, options, (token) => {
                                res.cookie = token;
                                res.send(200).send(token);
                            });
                        } else {
                            throw new Error('invalidPassword');
                        }
                    })
                    .catch(() => {
                        loginResult = false;
                        res.status(401).send('Incorrect username or password');
                    });
            });
        }
    };
};