"use strict";

module.exports = (router, db) => {
    let matches = db.models.Matches;

    return {
        "configureRoutes": () => {
            const resource = "/match";

            router.put(resource, (req, res) => {
                let match = {
                    number: req.body.number,
                    eventCode: req.body.eventCode,
                    redTeams: JSON.stringify(req.body.redTeams) || "",
                    blueTeams: JSON.stringify(req.body.blueTeams) || "",
                    redScore: req.body.redScore || 0,
                    blueScore: req.body.blueScore || 0
                };
                let matchDetails = new matches(match);

                matchDetails.save()
                    .then((matchDetails) => {
                        res.status(201).send(matchDetails);
                    })
                    .catch(() => {
                        res.status(400).send('Failed to create match.');
                    });
            });

            router.get(resource + "es/:event", (req, res) => {
                let event = req.params.event;

                matches.find({
                    eventCode: event
                }, (err, matchList) => {
                    if (!err) {
                        res.status(200).send(matchList);
                    } else {
                        res.status(400).send('Could not get matches for ', event, '.');
                    }
                });
            });

            router.get(resource + "/:event/:number", (req, res) => {
                let event = req.params.event,
                    number = req.parms.number;

                matches.find({
                    number: number,
                    eventCode: event
                }, (err, match) => {
                    if (!err) {
                        res.status(200).send(match);
                    } else {
                        res.status(400).send('Match ', number ,' at ', event, ' not found.');
                    }
                });
            });
        }
    };
};