"use strict";

module.exports = (Schema) => {
    // var ObjectId = Schema.Types.ObjectId;

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