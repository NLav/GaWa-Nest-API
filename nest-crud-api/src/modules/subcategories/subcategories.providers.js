"use strict";
exports.__esModule = true;
exports.SubcategoryProviders = void 0;
var subcategories_entity_1 = require("./subcategories.entity");
exports.SubcategoryProviders = [
    {
        provide: 'SUBCATEGORY_REPOSITORY',
        useFactory: function (connection) { return connection.getRepository(subcategories_entity_1.Subcategory); },
        inject: ['DATABASE_CONNECTION']
    },
];
