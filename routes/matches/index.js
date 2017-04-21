"use strict";

module.exports = (router, db) => {
    const match = db.models.match;

    return {
        "configureRoutes": () => {
            const resource = "/match";

            router.put(resource, (req, res) => {
                let matchInfo = {
                    number: req.body.number,
                    eventCode: req.body.eventCode,
                    redTeams: JSON.stringify(req.body.redTeams) || "",
                    blueTeams: JSON.stringify(req.body.blueTeams) || "",
                    redScore: req.body.redScore || 0,
                    blueScore: req.body.blueScore || 0
                };
                let matchDetails = new match(matchInfo);

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

                match.find({
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
                let searchParams = {
                    eventCode: event,
                    number: number
                };

                match.find(searchParams, (err, match) => {
                    if (!err) {
                        res.status(200).send(match);
                    } else {
                        res.status(400).send('Match ', number ,' at ', event, ' not found.');
                    }
                });
            });

            router.post(resource + "/:event/:number", (req, res) => {
                let event = req.params.event,
                    number = req.parms.number;
                let searchParams = {
                    eventCode: event,
                    number: number
                };
                let match = {
                    redTeams: JSON.stringify(req.body.redTeams),
                    blueTeams: JSON.stringify(req.body.blueTeams),
                    redScore: req.body.redScore || 0,
                    blueScore: req.body.blueScore || 0
                };

                match.update(searchParams, match, (err) => {
                    if (!err) {
                        res.status(201).send('Details update Match ', number ,' at ', event, '.');
                    } else {
                        res.status(400).send('Failed to update Match ', number ,' at ', event, '.');
                    }
                });
            });
        }
    };
};