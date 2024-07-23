"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryService = void 0;
const data_1 = require("../../data");
const inventoryItem_model_1 = require("../../data/postgres/models/inventoryItem.model");
const inventoryResource_model_1 = require("../../data/postgres/models/inventoryResource.model");
const domain_1 = require("../../domain");
class InventoryService {
    constructor(itemService, resourceService) {
        this.itemService = itemService;
        this.resourceService = resourceService;
    }
    addItemToInventory(id, addItemToIventoryDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const inventory = yield this.findOneInventoryByPlayerId(id);
            if (addItemToIventoryDTO.itemId) {
                const item = yield this.itemService.findOneItemById(addItemToIventoryDTO.itemId);
                if (inventory) {
                    const inventory_item = new inventoryItem_model_1.Inventory_item();
                    inventory_item.item = item;
                    inventory_item.quantity = addItemToIventoryDTO.quantity;
                    inventory_item.inventory = inventory;
                    try {
                        yield inventory_item.save();
                    }
                    catch (error) {
                        throw domain_1.CustomError.internalServer("Something went wrong");
                    }
                }
                else {
                    const inventory = yield this.createInventory(id);
                    const inventory_item = new inventoryItem_model_1.Inventory_item();
                    inventory_item.item = item;
                    inventory_item.quantity = addItemToIventoryDTO.quantity;
                    inventory_item.inventory = inventory;
                    try {
                        yield inventory_item.save();
                    }
                    catch (error) {
                        throw domain_1.CustomError.internalServer("Something went wrong");
                    }
                }
            }
            if (addItemToIventoryDTO.resourceId) {
                const resource = yield this.resourceService.findOneResourceById(addItemToIventoryDTO.resourceId);
                if (inventory) {
                    const inventory_resource = new inventoryResource_model_1.Inventory_resource();
                    inventory_resource.resource = resource;
                    inventory_resource.quantity = addItemToIventoryDTO.quantity;
                    inventory_resource.inventory = inventory;
                    try {
                        yield inventory_resource.save();
                    }
                    catch (error) {
                        throw domain_1.CustomError.internalServer("Something went wrong");
                    }
                }
                else {
                    const inventory = yield this.createInventory(id);
                    const inventory_resource = new inventoryResource_model_1.Inventory_resource();
                    inventory_resource.resource = resource;
                    inventory_resource.quantity = addItemToIventoryDTO.quantity;
                    inventory_resource.inventory = inventory;
                    try {
                        yield inventory_resource.save();
                    }
                    catch (error) {
                        throw domain_1.CustomError.internalServer("Something went wrong");
                    }
                }
            }
            return {
                message: "Object added to inventory"
            };
        });
    }
    findOneInventoryByPlayerId(playerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const player = yield data_1.Player.findOne({
                where: {
                    id: playerId
                },
                relations: ['inventory']
            });
            if (!player)
                throw domain_1.CustomError.notFound("Player not found");
            const inventory = player.inventory;
            return inventory;
        });
    }
    createInventory(playerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const player = yield data_1.Player.findOne({
                where: {
                    id: playerId
                }
            });
            if (!player)
                throw domain_1.CustomError.notFound("Player not found");
            const inventory = new data_1.Inventory();
            inventory.player = player;
            try {
                return yield inventory.save();
            }
            catch (error) {
                throw domain_1.CustomError.internalServer("Something went wrong");
            }
        });
    }
}
exports.InventoryService = InventoryService;
