"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const route_1 = require("./player/route");
const routes_1 = require("./user/routes");
const controller_1 = require("./inventory/controller");
const route_2 = require("./clan/route");
const routes_2 = require("./quest/routes");
const routes_3 = require("./resource/routes");
const router_1 = require("./construction/router");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use('/api/v1/player', route_1.PlayerRoutes.routes);
        router.use('/api/v1/user', routes_1.UserRoutes.routes);
        router.use('/api/v1/inventory', controller_1.InventoryRoutes.routes);
        router.use('/api/v1/clan', route_2.ClanRoutes.routes);
        router.use('/api/v1/quest', routes_2.QuestRoutes.routes);
        router.use('/api/v1/resources', routes_3.ResourceRoutes.routes);
        router.use('/api/v1/constructions', router_1.ConstructionRoutes.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
