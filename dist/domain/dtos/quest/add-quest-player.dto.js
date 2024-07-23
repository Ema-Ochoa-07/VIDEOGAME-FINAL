"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddQuestPlayerDTO = void 0;
class AddQuestPlayerDTO {
    constructor(questId) {
        this.questId = questId;
    }
    static create(object) {
        const { questId } = object;
        if (!questId)
            return ['Missing questId'];
        return [undefined, new AddQuestPlayerDTO(questId)];
    }
}
exports.AddQuestPlayerDTO = AddQuestPlayerDTO;
