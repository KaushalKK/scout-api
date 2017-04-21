"use strict";

module.exports = function(Schema) {
    let matchSchema = new Schema({
        number: Number,
        eventCode: String,
        redTeams: String,
        blueTeams: String,
        redScore: Number,
        blueScore: Number
    },
    { timestamps: true });

    return matchSchema;
};