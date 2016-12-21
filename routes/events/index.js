"use strict";

module.exports = (router, db) => {
    let events = db.models.Events;

    return {
        "configureRoutes": () => {
            const resource = "/event";

            router.put(resource, (req, res) => {
                var eventDetails = new events(req.body);

                eventDetails.save()
                    .then((eventDetails) => {
                        res.status(201).send(eventDetails);
                    })
                    .catch(() => {
                        res.status(400).send('Failed to create event.');
                    });
            });

            router.get(resource + "s", (req, res) => {
                events.find({}, (err, eventList) => {
                    if(!err) {
                        res.status(200).send(eventList);
                    } else {
                        res.status(400).send('Could not get all events.');
                    }
                });
            });
        }
    };
};