"use strict";

module.exports = (Schema) => {
    let teamsMatchSchema = new Schema({
        team: Number,
    	event: String,
        match: Number,
        data: {
            type: Object,
            required: true
        },
        dataOwner: {
            type: String,
            required: true
        }
    },
    { timestamps: true });

    return teamsMatchSchema;
};
