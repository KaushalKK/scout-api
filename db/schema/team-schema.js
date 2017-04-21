"use strict";

module.exports = (Schema) => {
    let teamSchema = new Schema({
        number: {
            type: Number,
            unique: true
        },
        name: String,
        location: String
    },
    { timestamps: true });

    return teamSchema;
};