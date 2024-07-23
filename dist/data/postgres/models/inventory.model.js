"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
const typeorm_1 = require("typeorm");
const player_model_1 = require("./player.model");
const inventoryResource_model_1 = require("./inventoryResource.model");
const inventoryItem_model_1 = require("./inventoryItem.model");
let Inventory = class Inventory extends typeorm_1.BaseEntity {
};
exports.Inventory = Inventory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Inventory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => player_model_1.Player, (player) => player.inventory),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", player_model_1.Player)
], Inventory.prototype, "player", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => inventoryResource_model_1.Inventory_resource, (inventory_resource) => inventory_resource.inventory),
    __metadata("design:type", Array)
], Inventory.prototype, "inventory", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => inventoryItem_model_1.Inventory_item, (inventory_item) => inventory_item.inventory),
    __metadata("design:type", Array)
], Inventory.prototype, "inventory_item", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Inventory.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Inventory.prototype, "updated_at", void 0);
exports.Inventory = Inventory = __decorate([
    (0, typeorm_1.Entity)()
], Inventory);
