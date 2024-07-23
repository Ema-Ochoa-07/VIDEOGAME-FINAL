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
exports.ClanMember = exports.ClanMemberRole = void 0;
const typeorm_1 = require("typeorm");
const player_model_1 = require("./player.model");
const clans_model_1 = require("./clans.model");
var ClanMemberRole;
(function (ClanMemberRole) {
    ClanMemberRole["MASTER"] = "MASTER";
    ClanMemberRole["OFFICER"] = "OFFICER";
    ClanMemberRole["SUBOFFICER"] = "SUBOFFICER";
    ClanMemberRole["MEMBER"] = "MEMBER";
})(ClanMemberRole || (exports.ClanMemberRole = ClanMemberRole = {}));
let ClanMember = class ClanMember extends typeorm_1.BaseEntity {
};
exports.ClanMember = ClanMember;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ClanMember.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => player_model_1.Player, (player) => player.clanMembers),
    __metadata("design:type", player_model_1.Player)
], ClanMember.prototype, "player", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => clans_model_1.Clan, (clan) => clan.clanMembers),
    __metadata("design:type", clans_model_1.Clan)
], ClanMember.prototype, "clan", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ClanMemberRole,
        default: ClanMemberRole.MEMBER,
    }),
    __metadata("design:type", String)
], ClanMember.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ClanMember.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ClanMember.prototype, "updated_at", void 0);
exports.ClanMember = ClanMember = __decorate([
    (0, typeorm_1.Entity)()
], ClanMember);
