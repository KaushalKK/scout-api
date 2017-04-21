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
        owner: {
            type: Number,
            required: true
        }
    },
    { timestamps: true });

    return teamsMatchSchema;
};
