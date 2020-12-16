const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Team = db.model('Team', {
    name: String,
    abbreviation: String,
    founded: Number,
    champ: Number
});

module.exports = Team;