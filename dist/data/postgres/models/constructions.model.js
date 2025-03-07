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
exports.Construction = void 0;
const typeorm_1 = require("typeorm");
const player_model_1 = require("./player.model");
let Construction = class Construction extends typeorm_1.BaseEntity {
};
exports.Construction = Construction;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Construction.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => player_model_1.Player, (player) => player.constructions),
    __metadata("design:type", player_model_1.Player)
], Construction.prototype, "player", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: false,
    }),
    __metadata("design:type", String)
], Construction.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: false,
    }),
    __metadata("design:type", String)
], Construction.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Construction.prototype, "level", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: false,
    }),
    __metadata("design:type", String)
], Construction.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Construction.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Construction.prototype, "updated_at", void 0);
exports.Construction = Construction = __decorate([
    (0, typeorm_1.Entity)()
], Construction);
