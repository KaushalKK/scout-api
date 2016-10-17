module.exports = function () {
    'use strict';

    switch (process.argv[3]) {
        case 'prod':
            return {
                dbConfig: ""
            }
        default:
            return {
                dbConfig: "mongodb://localhost/frc-scouting"
            }
    }
};
