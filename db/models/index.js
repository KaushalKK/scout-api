"use strict";

module.exports = (mongoose, dbSchema) => {
    const teamModel = mongoose.model('Teams', dbSchema.team);
    const userModel = mongoose.model('Users', dbSchema.user);
    const eventModel = mongoose.model('Events', dbSchema.event);
    const matchModel = mongoose.model('Matches', dbSchema.match);
    const teamMatchModel = mongoose.model('TeamMatches', dbSchema.teamsMatches);

    return {
        team: teamModel,
        user: userModel,
        event: eventModel,
        match: matchModel,
        teamMatch: teamMatchModel
    };
};