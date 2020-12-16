const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Player = db.model('Player', {
    _id: Number,
    name: String,
    position: String,
    point: Number,
    assist: Number,
    rebound: Number,
    age: Number,
    _team: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }
});

module.exports = Player;