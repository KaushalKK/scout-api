"use strict";

module.exports = (mongoose, dbSchema) => {
    var teamModel = mongoose.model('Teams', dbSchema.team);
    var userModel = mongoose.model('Users', dbSchema.user);
    var eventModel = mongoose.model('Events', dbSchema.event);
    var matchModel = mongoose.model('Matches', dbSchema.match);

    return {
        team: teamModel,
        user: userModel,
        event: eventModel,
        match: matchModel
    };
};