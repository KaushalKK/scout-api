"use strict";

module.exports = function (router, db) {
    return {
        "configureRoutes": function () {
            var resource = "/match";

            router.put(resource, function (req, res) {
                var matchDetails = new db.models.Matches(req.body);

                matchDetails.save().exec()
                    .then(function (matchDetails) {
                        res.status(201).send(matchDetails);
                    })
                    .catch(function (err) {
                        res.status(400).send('Failed to create match.');
                    });
            });
        }
    };
};;