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
exports.SubcategoryModule = void 0;
var common_1 = require("@nestjs/common");
var database_module_1 = require("../../database/database.module");
var subcategories_controllers_1 = require("./subcategories.controllers");
var subcategories_providers_1 = require("./subcategories.providers");
var subcategories_service_1 = require("./subcategories.service");
var SubcategoryModule = /** @class */ (function () {
    function SubcategoryModule() {
    }
    SubcategoryModule = __decorate([
        common_1.Module({
            controllers: [subcategories_controllers_1.SubcategoryController],
            imports: [database_module_1.DatabaseModule],
            providers: __spreadArray(__spreadArray([], subcategories_providers_1.SubcategoryProviders), [subcategories_service_1.SubcategoryService])
        })
    ], SubcategoryModule);
    return SubcategoryModule;
}());
exports.SubcategoryModule = SubcategoryModule;
