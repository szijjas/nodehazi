const renderMW = require('../middleware/renderMW');
const delPlayerMW = require('../middleware/player/delPlayerMW');
const getPlayersMW = require('../middleware/player/getPlayersMW');
const getPlayerMW = require('../middleware/player/getPlayerMW');
const savePlayerMW = require('../middleware/player/savePlayerMW');
const getTeamsMW = require('../middleware/team/getTeamsMW');

const PlayerModel = require('../models/player');
const TeamModel = require('../models/team');

module.exports = function(app) {
    const objRepo = {
        PlayerModel: PlayerModel,
        TeamModel: TeamModel
    };

    app.use(
        '/player/new',
        savePlayerMW(objRepo),
        renderMW(objRepo, 'playereditnew')
    );
    app.use(
        '/player/edit/:pid',
        getPlayerMW(objRepo),
        savePlayerMW(objRepo),
        renderMW(objRepo, 'playereditnew')
    );
    app.get(
        '/player/del/:pid',
        getPlayerMW(objRepo),
        delPlayerMW(objRepo)
    );
    app.get(
        '/players',
        getPlayersMW(objRepo),
        renderMW(objRepo, 'players')
    );

    app.get(
        '/teams',
        getTeamsMW(objRepo),
        renderMW(objRepo, 'teams')
    );

    app.use('/', renderMW(objRepo, 'index'));
};