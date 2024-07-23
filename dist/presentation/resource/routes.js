"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const resource_service_1 = require("../services/resource.service");
class ResourceRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const resourceService = new resource_service_1.ResourceService();
        const controller = new controller_1.ResourceController(resourceService);
        router.post('/', controller.createResource);
        router.get('/', controller.findResourcesAll);
        return router;
    }
}
exports.ResourceRoutes = ResourceRoutes;
