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
exports.QuestService = void 0;
const data_1 = require("../../data");
const domain_1 = require("../../domain");
class QuestService {
    constructor(playerService) {
        this.playerService = playerService;
    }
    addQuestToPlayer(playerId, addQuestPlayerDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const playerPromise = this.playerService.findOnePlayer(playerId);
            const questPromise = this.findOneQuestById(addQuestPlayerDTO.questId);
            const [player, quest] = yield Promise.all([playerPromise, questPromise]);
            const questPlayer = new data_1.Quest_player();
            questPlayer.player = player;
            questPlayer.quest = quest;
            try {
                return yield questPlayer.save();
            }
            catch (error) {
                throw domain_1.CustomError.internalServer("Something went wrong");
            }
        });
    }
    findOneQuestById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const quest = yield data_1.Quest.findOne({
                where: {
                    id
                }
            });
            if (!quest)
                throw domain_1.CustomError.notFound("Quest not found");
            return quest;
        });
    }
}
exports.QuestService = QuestService;
