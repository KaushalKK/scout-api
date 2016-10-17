"use strict";

module.exports = function(Schema) {
    var ObjectId = Schema.Types.ObjectId;

    var matchSchema = new Schema({
        number: Number,
        eventCode: String
    });

    return matchSchema;
};