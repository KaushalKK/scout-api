"use strict";

module.exports = (Schema) => {
    let eventSchema = new Schema({
        eventCode: {
            type: String,
            unique: true
        },
        location: String,
        week: Number
    },
    { timestamps: true });

    return eventSchema;
};