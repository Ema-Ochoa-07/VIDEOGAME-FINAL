"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const quest_service_1 = require("../services/quest.service");
const player_service_1 = require("../services/player.service");
const user_service_1 = require("../services/user.service");
class QuestRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const userService = new user_service_1.UserService();
        const playerService = new player_service_1.PlayerService(userService);
        const questService = new quest_service_1.QuestService(playerService);
        const controller = new controller_1.QuestController(questService);
        router.post('/:playerId/assign', controller.addQuestToPlayer);
        return router;
    }
}
exports.QuestRoutes = QuestRoutes;
