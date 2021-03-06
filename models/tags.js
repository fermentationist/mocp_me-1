'use strict';
// Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
const db = require("../models/");
// Creates a "Photo" model that matches up with DB
module.exports = function (db, DataTypes) {
    const Tags = db.define("Tags", {
        // the tag's id gets saved as an integer
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        // the name of the tag (a string)
        tag_name: Sequelize.STRING,
        // and the photo id (an integer)
        photo_id: Sequelize.INTEGER
    },
        {
            timestamps: false
        });

    return Tags;
}