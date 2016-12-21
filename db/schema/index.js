"use strict";

module.exports = (mongoose) => {
    var Schema = mongoose.Schema;

    return {
        team: require('./team-schema')(Schema),
        user: require('./user-schema')(Schema),
        event: require('./event-schema')(Schema),
        match: require('./match-schema')(Schema)
    };
};