"use strict";

module.exports = (Schema) => {

    let teamsMatchesSchema = new Schema({
    	event: String,
        match: Number,
        team: Number,
        /* Autonomous Mode */
        auto_fuel_high: Number,     // 1 high = 1 point or 1 kPa
        auto_fuel_low: Number,      // 3 low = 1 point or 1 kPa
        auto_fuel_missed: Number,
        auto_gears: Number,
        auto_baseline: Boolean,
        auto_rotor: Boolean,
        /* Tele-Op Mode */
        tele_fuel_high: Number,     // 3 high = 1 point or 1 kPa
        tele_fuel_low: Number,      // 9 low = 1 point or 1 kPa
        tele_fuel_missed: Number,
        tele_gears: Number,
        tele_rotor: Number,
        hoppers: Number,
        /* Hang */
	take_off_attempt: Boolean,
        take_off_ready: Boolean,
	take_off_time: Number,
        /* Bonus */
        pressure_bonus: Boolean,
        rotor_bonus: Boolean,
        /* Final */
        fouls: Number,
        tech_fouls: Number,
        dq: Boolean,
        shot_map: String,
        comments: String,
        total_points: Number
    },
    { timestamps: true });

    return teamsMatchesSchema;
};
