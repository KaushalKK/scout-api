"use strict";

module.exports = (mongoose) => {
    const Schema = mongoose.Schema;

    return {
        team: require('./team-schema')(Schema),
        user: require('./user-schema')(Schema),
        event: require('./event-schema')(Schema),
        match: require('./match-schema')(Schema),
        teamsMatches: require('./team-match-schema')(Schema)
    };
};