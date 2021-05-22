"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.GameModule = void 0;
var common_1 = require("@nestjs/common");
var database_module_1 = require("../../database/database.module");
var games_controllers_1 = require("./games.controllers");
var games_providers_1 = require("./games.providers");
var games_service_1 = require("./games.service");
var GameModule = /** @class */ (function () {
    function GameModule() {
    }
    GameModule = __decorate([
        common_1.Module({
            controllers: [games_controllers_1.GameController],
            imports: [database_module_1.DatabaseModule],
            providers: __spreadArray(__spreadArray([], games_providers_1.GameProviders), [games_service_1.GameService])
        })
    ], GameModule);
    return GameModule;
}());
exports.GameModule = GameModule;
