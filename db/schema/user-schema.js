"use strict";

module.exports = (Schema) => {
    let userSchema = new Schema({
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