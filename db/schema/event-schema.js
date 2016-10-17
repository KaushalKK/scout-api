"use strict";

module.exports = function(Schema) {
    var ObjectId = Schema.Types.ObjectId;

    var eventSchema = new Schema({
        eventCode: String,
        location: String
    });

    return eventSchema;
};