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
exports.Quest_player = void 0;
const typeorm_1 = require("typeorm");
const player_model_1 = require("./player.model");
const quest_model_1 = require("./quest.model");
let Quest_player = class Quest_player extends typeorm_1.BaseEntity {
};
exports.Quest_player = Quest_player;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Quest_player.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => player_model_1.Player, (player) => player.quest_players),
    __metadata("design:type", player_model_1.Player)
], Quest_player.prototype, "player", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => quest_model_1.Quest, (quest) => quest.questsPlayer),
    __metadata("design:type", quest_model_1.Quest)
], Quest_player.prototype, "quest", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', {
        nullable: false,
        default: false,
    }),
    __metadata("design:type", Boolean)
], Quest_player.prototype, "completed", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Quest_player.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Quest_player.prototype, "updated_at", void 0);
exports.Quest_player = Quest_player = __decorate([
    (0, typeorm_1.Entity)()
], Quest_player);
