"use strict";

module.exports = function(Schema) {
    var ObjectId = Schema.Types.ObjectId;

    var teamSchema = new Schema({
        id: ObjectId,
        number: {
            type: Number,
            unique: true
        },
        name: String,
        location: String
    });

    return teamSchema;
};