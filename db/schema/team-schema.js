"use strict";

module.exports = (Schema) => {
    let teamSchema = new Schema({
        number: {
            type: Number,
            unique: true
        },
        name: String,
        location: String,
        events: {
            type: Array,
            default: []
        }
    },
    { timestamps: true });

    return teamSchema;
};