"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstructionRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const construction_service_1 = require("../services/construction.service");
class ConstructionRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const constructionService = new construction_service_1.ConstructionService;
        const controller = new controller_1.ConstructionController(constructionService);
        router.get('/', controller.getConstructions);
        return router;
    }
}
exports.ConstructionRoutes = ConstructionRoutes;
