"use strict";

module.exports = function(Schema) {
    var ObjectId = Schema.Types.ObjectId;

    var matchSchema = new Schema({
        id: {
            type: ObjectId,
            unique: true
        },
        number: Number,
        eventCode: String
    });

    return matchSchema;
};