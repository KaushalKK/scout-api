"use strict";

module.exports = function (router, db) {
    return {
        "configureRoutes": function () {
            var resource = "/event";

            router.put(resource, function (req, res) {
                var eventDetails = new db.models.Events(req.body);

                eventDetails.save().exec()
                    .then(function (eventDetails) {
                        res.status(201).send(eventDetails);
                    })
                    .catch(function (err) {
                        res.status(400).send('Failed to create event.');
                    });
            });
        }
    };
};