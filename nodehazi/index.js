/*const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static('static'));

app.use(
    session({
        secret: 'secret'
    })
);

// Load routing
require('./route/index')(app);

app.use((err, req, res, next) => {
    res.end('Problem...');
    console.log(err);
});

app.listen(3000, function() {
    console.log('Hello :3000');
});*/

const TeamModel = require('./models/team')
const PlayerModel = require('./models/player')

let team = new TeamModel();
team.name = "Lakers"
team.abbreviation = "LAL"
team.founded = 1932
team.champ = 17

let player = new PlayerModel();
player.name = "Kobe"
player.position = "PG"
player.point = 25
player.assist = 6
player.rebound = 8
player.age = 41

team.save((err)=> {
    console.log(err);
})

player.save((err)=> {
    console.log(err);
})