"use strict";

/* Authentication Strategies */
const googStrategy = require('passport-google-oauth').OAuth2Strategy;
const fbkStrategy = require("passport-facebook").Strategy;
const twtrStrategy = require('passport-twitter').Strategy;

const passport = require("passport");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const q = require("q");

function completeLoginProcess() {
    return q.resolve();
}

module.exports = (router, db) => {
    const user = db.models.user;

    return {
        "configureRoutes": function () {
            const resource = "/user";
            const cert = fs.readFileSync("keys/public_key");

            router.put(resource + "/register", (req, res) => {
                let userInput = {
                    email: req.body.email,
                    name: req.body.name,
                    team: req.body.team
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

                let email = req.body.email;

                user.findOne({ email: email })
                    .then((userDetails) => {
                        let payload = {
                            email: email,
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

            router.post(resource + "/login/facebook", (req, res) => {
                let options = {
                    "algorithm": "RS256",
                    "expiresIn": "1h",
                    "issuer": "frcscout"
                };

                passport.use(new fbkStrategy({
                    clientID: FACEBOOK_APP_ID,
                    clientSecret: FACEBOOK_APP_SECRET,
                    callbackURL: "http://www.example.com/auth/facebook/callback"
                },
                    function (accessToken, refreshToken, profile, done) {
                        console.log(accessToken);
                        console.log(refreshToken);
                        console.log(profile);
                        done();
                    }
                ));

                user.findOne({ email: email })
                    .then((userDetails) => {

                    })
                    .catch(() => {
                        res.status(401).send('Incorrect username or password');
                    });
            });

            router.post(resource + "/login/google", (req, res) => {
                let options = {
                    "algorithm": "RS256",
                    "expiresIn": "1h",
                    "issuer": "frcscout"
                };

                user.findOne({ email: email })
                    .then((userDetails) => {
                        
                    })
                    .catch(() => {
                        res.status(401).send('Incorrect username or password');
                    });
            });

            router.post(resource + "/login/twitter", (req, res) => {
                let options = {
                    "algorithm": "RS256",
                    "expiresIn": "1h",
                    "issuer": "frcscout"
                };

                user.findOne({ email: email })
                    .then((userDetails) => {
                        
                    })
                    .catch(() => {
                        res.status(401).send('Incorrect username or password');
                    });
            });
        }
    };
};