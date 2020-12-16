/**
 * Load a player from the database using the :pid param
 * The result is saved to res.locals.player
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const PlayerModel = requireOption(objectrepository, 'Player');

    return function(req, res, next) {
        PlayerModel.findOne({ _id: req.params.pid }, (err, player) => {
            if (err || !player) {
                return next(err);
            }

            res.locals.player = player;
            return next();
        });
    };
};