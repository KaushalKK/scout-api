"use strict";

var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

var secret = process.argv[2];

module.exports = function (router, db) {
    return {
        "configureRoutes": function () {
            var resource = "/auth";

            router.post(resource + "/token", function (req, res) {
                var username = req.body.username;
                var password = req.body.password;

                var payload = {
                    "username": username
                };
                var options = {
                    "algorithm": "RS256",
                    "expiresIn": "1h",
                    "issuer": "frc-scout"
                };

                db.models.Users.findOne({ alias: username }).exec()
                    .then(function (userDetails) {
                        if (bcrypt.compareSync(password, userDetails.password)) {
                            jwt.sign(payload, secret, options, function (err, token) {
                                res.cookie("token", token);
                                return res.status(200).send({ token: token });
                            });
                        } else {
                            res.status(401).send("Incorrect username or password.");
                        }
                    })
                    .catch(function (err) {
                        res.status(500).send('Failed to login.');
                    });
            });
        }
    };
};