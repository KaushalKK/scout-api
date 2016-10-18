"use strict";

module.exports = function (router, db) {
    return {
        "configureRoutes": function () {
            var resource = "/team";

            router.put(resource, function (req, res) {
                var teamDetails = new db.models.Teams(req.body);

                teamDetails.save()
                    .then(function (teamDetails) {
                        res.status(201).send(teamDetails);
                    })
                    .catch(function (err) {
                        res.status(400).send('Failed to create team.');
                    });
            });
        }
    };
};