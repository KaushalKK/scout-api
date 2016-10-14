"use strict";

module.exports = function(Schema) {
    var ObjectId = Schema.Types.ObjectId;

    var eventSchema = new Schema({
        id: {
            type: ObjectId,
            unique: true
        },
        eventCode: String,
        location: String
    });

    return eventSchema;
};