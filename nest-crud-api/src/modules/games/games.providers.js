"use strict";
exports.__esModule = true;
exports.GameProviders = void 0;
var games_entity_1 = require("./games.entity");
exports.GameProviders = [
    {
        provide: 'GAME_REPOSITORY',
        useFactory: function (connection) { return connection.getRepository(games_entity_1.Game); },
        inject: ['DATABASE_CONNECTION']
    },
];
