"use strict";

module.exports = (router, db) => {
    const team = db.models.team;
    const matchDetail = db.models.teamMatch;

    return {
        "configureRoutes": () => {
            const resource = "/team";

            router.put(resource, (req, res) => {
                let teamDetails = new team(req.body);

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