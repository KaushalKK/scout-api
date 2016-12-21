"use strict";

module.exports = (Schema) => {
    var ObjectId = Schema.Types.ObjectId;

    var teamSchema = new Schema({
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