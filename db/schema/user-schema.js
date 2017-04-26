"use strict";

module.exports = (Schema) => {
    let userSchema = new Schema({
        alias: {
            type: String,
            unique: true
        },
        name: String,
        team: {
            type: Number,
            required: true
        },
        password: String,
        facebookId: String,
        googleId: String,
        twitterId: String
    },
    { timestamps: true });

    return userSchema;
};