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

            resource.get(resource + "s", (req, res) => {
                team.find({}, (err, teamList) => {
                    if (!err) {
                        res.status(200).send(teamList);
                    } else {
                        res.status(400).send('Could not get teams.');
                    }
                });
            });

            resource.get(resource + "/:team", (req, res) => {
                let team = req.params.team;

                team.findOne({
                    number: team
                }, (err, teamDetails) => {
                    if (!err) {
                        res.status(200).send(teamDetails);
                    } else {
                        res.status(400).send('Could not get ' + team + ' details.');
                    }
                });
            });

            resource.post(resource + "/:team", (req, res) => {
                let options = {};
                let team = req.params.team;
                let teamDetails = req.body;

                team.findOneAndUpdate({
                    number: team
                }, teamDetails, options, (err, updatedDetails) => {
                    if (!err) {
                        res.status(200).send(updatedDetails);
                    } else {
                        res.status(400).send('Could not update ' + team + ' details.');
                    }
                });
            });

            router.put(resource + "/:team/:event/:match", (req, res) => {
                let team = req.params.team;
                let event = req.params.event;
                let match = req.params.match;
                
                let matchDetails = new matchDetail({
                        team: team,
                        owner: team,
                        event: event,
                        match: match,
                        data: req.body
                });

                matchDetails.save()
                    .then((createdDetails) => {
                        res.status(201).send(createdDetails);
                    })
                    .catch(() => {
                        res.status(400).send('Failed to create match details.');
                    });
            });
        }
    };
};