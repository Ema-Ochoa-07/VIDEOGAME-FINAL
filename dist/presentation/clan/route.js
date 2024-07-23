"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClanRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const clan_service_1 = require("../services/clan.service");
const player_service_1 = require("../services/player.service");
const user_service_1 = require("../services/user.service");
class ClanRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const userService = new user_service_1.UserService();
        const playerService = new player_service_1.PlayerService(userService);
        const clanService = new clan_service_1.ClanService(playerService);
        const controller = new controller_1.ClanController(clanService);
        router.post('/:playerReceiverId/join', controller.addMemberToClan);
        router.post('/', controller.createClan);
        router.get('/:id/members', controller.findClanByMember);
        return router;
    }
}
exports.ClanRoutes = ClanRoutes;
