"use strict";

module.exports = (Schema) => {
    var ObjectId = Schema.Types.ObjectId;

    var userSchema = new Schema({
        alias: {
            type: String,
            unique: true
        },
        name: String,
        team: Number,
        password: String
    },
    { timestamps: true });

    return userSchema;
};