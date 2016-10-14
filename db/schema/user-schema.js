"use strict";

module.exports = function(Schema) {
    var ObjectId = Schema.Types.ObjectId;

    var userSchema = new Schema({
        id: ObjectId,
        alias: {
            type: String,
            unique: true
        },
        name: String,
        team: Number
    });

    return userSchema;
};