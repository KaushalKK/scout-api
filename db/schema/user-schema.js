"use strict";

module.exports = (Schema) => {
    let userSchema = new Schema({
        name: String,
        team: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            unique: true
        },
        facebookId: String,
        googleId: String,
        twitterId: String
    },
    { timestamps: true });

    return userSchema;
};