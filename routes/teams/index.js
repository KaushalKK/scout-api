"use strict";

module.exports = (router, db) => {
    return {
        "configureRoutes": () => {
            const resource = "/team";

            router.put(resource, (req, res) => {
                var teamDetails = new db.models.Teams(req.body);

                teamDetails.save()
                    .then((teamDetails) => {
                        res.status(201).send(teamDetails);
                    })
                    .catch(() => {
                        res.status(400).send('Failed to create team.');
                    });
            });
        }
    };
};