"use strict";

var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

const secret = process.argv[2];

module.exports = (router, db) => {
    return {
        "configureRoutes": () => {
            const resource = "/auth";

            router.post(resource + "/token", (req, res) => {
                let username = req.body.username;
                let password = req.body.password;

                var payload = {
                    "username": username
                };
                var options = {
                    "algorithm": "RS256",
                    "expiresIn": "1h",
                    "issuer": "frc-scout"
                };

                db.models.Users.findOne({ alias: username }).exec()
                    .then((userDetails) => {
                        if (bcrypt.compareSync(password, userDetails.password)) {
                            jwt.sign(payload, secret, options, (err, token) => {
                                res.cookie("token", token);
                                return res.status(200).send({ token: token });
                            });
                        } else {
                            res.status(401).send("Incorrect username or password.");
                        }
                    })
                    .catch(() => {
                        res.status(500).send('Failed to login.');
                    });
            });
        }
    };
};