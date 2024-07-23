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
exports.Clan = void 0;
const typeorm_1 = require("typeorm");
const clanMember_model_1 = require("./clanMember.model");
let Clan = class Clan extends typeorm_1.BaseEntity {
};
exports.Clan = Clan;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Clan.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 100,
        nullable: false,
    }),
    __metadata("design:type", String)
], Clan.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: false,
    }),
    __metadata("design:type", String)
], Clan.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => clanMember_model_1.ClanMember, (clanMember) => clanMember.clan),
    __metadata("design:type", Array)
], Clan.prototype, "clanMembers", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Clan.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Clan.prototype, "updated_at", void 0);
exports.Clan = Clan = __decorate([
    (0, typeorm_1.Entity)()
], Clan);
