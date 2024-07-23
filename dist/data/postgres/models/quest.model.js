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
exports.Quest = void 0;
const typeorm_1 = require("typeorm");
const questPlayer_model_1 = require("./questPlayer.model");
let Quest = class Quest extends typeorm_1.BaseEntity {
};
exports.Quest = Quest;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Quest.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: false,
        unique: true,
    }),
    __metadata("design:type", String)
], Quest.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('text', {
        nullable: false,
    }),
    __metadata("design:type", String)
], Quest.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: false,
    }),
    __metadata("design:type", String)
], Quest.prototype, "reward", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Quest.prototype, "exp", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => questPlayer_model_1.Quest_player, (quest_player) => quest_player.quest),
    __metadata("design:type", Array)
], Quest.prototype, "questsPlayer", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Quest.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Quest.prototype, "updated_at", void 0);
exports.Quest = Quest = __decorate([
    (0, typeorm_1.Entity)()
], Quest);
