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
exports.Inventory_resource = void 0;
const typeorm_1 = require("typeorm");
const inventory_model_1 = require("./inventory.model");
const resource_model_1 = require("./resource.model");
let Inventory_resource = class Inventory_resource extends typeorm_1.BaseEntity {
};
exports.Inventory_resource = Inventory_resource;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Inventory_resource.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: false,
        default: 1,
    }),
    __metadata("design:type", Number)
], Inventory_resource.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => inventory_model_1.Inventory, (inventory) => inventory.inventory),
    __metadata("design:type", inventory_model_1.Inventory)
], Inventory_resource.prototype, "inventory", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => resource_model_1.Resource, (resource) => resource.inventory_resource),
    __metadata("design:type", resource_model_1.Resource)
], Inventory_resource.prototype, "resource", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Inventory_resource.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Inventory_resource.prototype, "updated_at", void 0);
exports.Inventory_resource = Inventory_resource = __decorate([
    (0, typeorm_1.Entity)()
], Inventory_resource);
