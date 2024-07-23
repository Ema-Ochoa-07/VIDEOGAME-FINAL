"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const user_service_1 = require("../services/user.service");
const player_service_1 = require("../services/player.service");
const inventory_service_1 = require("../services/inventory.service");
const item_service_1 = require("../services/item.service");
const resource_service_1 = require("../services/resource.service");
const construction_service_1 = require("../services/construction.service");
class PlayerRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const userService = new user_service_1.UserService();
        const playerService = new player_service_1.PlayerService(userService);
        const itemService = new item_service_1.ItemService();
        const resourceService = new resource_service_1.ResourceService();
        const inventoryService = new inventory_service_1.InventoryService(itemService, resourceService);
        const constructionService = new construction_service_1.ConstructionService();
        const playerController = new controller_1.PlayerController(playerService, inventoryService, constructionService);
        router.post('/', playerController.createPlayer);
        router.get('/:id', playerController.findOnePlayer);
        router.post('/:id/invetory/items', playerController.addItemToInventory);
        router.get('/:id/inventory', playerController.getInventoryByPlayerId);
        router.get('/:id/constructions', playerController.getConstructionByIdPlayer);
        return router;
    }
}
exports.PlayerRoutes = PlayerRoutes;
