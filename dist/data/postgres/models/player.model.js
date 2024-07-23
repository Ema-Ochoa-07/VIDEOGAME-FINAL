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
exports.Player = void 0;
const typeorm_1 = require("typeorm");
const user_model_1 = require("./user.model");
const constructions_model_1 = require("./constructions.model");
const questPlayer_model_1 = require("./questPlayer.model");
const clanMember_model_1 = require("./clanMember.model");
const inventory_model_1 = require("./inventory.model");
let Player = class Player extends typeorm_1.BaseEntity {
};
exports.Player = Player;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Player.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_model_1.User, (user) => user.players),
    __metadata("design:type", user_model_1.User)
], Player.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 80,
        nullable: false,
        unique: true,
    }),
    __metadata("design:type", String)
], Player.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: false,
        default: 1,
    }),
    __metadata("design:type", Number)
], Player.prototype, "level", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        nullable: false,
        default: 0,
    }),
    __metadata("design:type", Number)
], Player.prototype, "experience", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        nullable: false,
        default: 80,
    }),
    __metadata("design:type", Number)
], Player.prototype, "health", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        nullable: false,
        default: 100,
    }),
    __metadata("design:type", Number)
], Player.prototype, "energy", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => constructions_model_1.Construction, (construction) => construction.player),
    __metadata("design:type", Array)
], Player.prototype, "constructions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => questPlayer_model_1.Quest_player, (quest_player) => quest_player.player),
    __metadata("design:type", Array)
], Player.prototype, "quest_players", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => clanMember_model_1.ClanMember, (clanMember) => clanMember.player),
    __metadata("design:type", Array)
], Player.prototype, "clanMembers", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => inventory_model_1.Inventory, (inventory) => inventory.player),
    __metadata("design:type", inventory_model_1.Inventory)
], Player.prototype, "inventory", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Player.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Player.prototype, "updated_at", void 0);
exports.Player = Player = __decorate([
    (0, typeorm_1.Entity)()
], Player);
