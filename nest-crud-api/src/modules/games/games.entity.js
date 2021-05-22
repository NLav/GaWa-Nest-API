"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Game = void 0;
var typeorm_1 = require("typeorm");
var subcategories_entity_1 = require("../subcategories/subcategories.entity");
var Game = /** @class */ (function () {
    function Game() {
    }
    Game_1 = Game;
    var Game_1;
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ name: 'primary_id' })
    ], Game.prototype, "id");
    __decorate([
        typeorm_1.Column({ length: 500 })
    ], Game.prototype, "name");
    __decorate([
        typeorm_1.Column()
    ], Game.prototype, "description");
    __decorate([
        typeorm_1.Column()
    ], Game.prototype, "year");
    __decorate([
        typeorm_1.Column()
    ], Game.prototype, "publisher");
    __decorate([
        typeorm_1.Column()
    ], Game.prototype, "developer");
    __decorate([
        typeorm_1.Column()
    ], Game.prototype, "status");
    __decorate([
        typeorm_1.ManyToMany(function (type) { return subcategories_entity_1.Subcategory; }, function (game) { return Game_1; })
    ], Game.prototype, "subcategory");
    Game = Game_1 = __decorate([
        typeorm_1.Entity()
    ], Game);
    return Game;
}());
exports.Game = Game;
