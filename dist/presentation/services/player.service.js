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
exports.PlayerService = void 0;
const data_1 = require("../../data");
const domain_1 = require("../../domain");
class PlayerService {
    constructor(userService) {
        this.userService = userService;
    }
    createPlayer(createPlayerDTO, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            // busquen el usuario y verificar que exista
            const userPromise = this.userService.findeOneUser(userId);
            // verificar que no exista un jugador con ese nombre
            const playerPromise = this.findOnePlayerByName(createPlayerDTO.name);
            const [userData, _] = yield Promise.all([userPromise, playerPromise]);
            const player = new data_1.Player();
            player.user = userData;
            player.name = createPlayerDTO.name.toLocaleLowerCase().trim();
            try {
                return yield player.save();
            }
            catch (error) {
                throw domain_1.CustomError.internalServer("Something went wrong");
            }
        });
    }
    findOnePlayer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const player = yield data_1.Player.findOne({
                where: {
                    id
                },
                relations: ['user', 'clanMembers', 'clanMembers.clan'],
                select: {
                    user: {
                        id: true,
                        username: true,
                        email: true,
                    }
                }
            });
            if (!player)
                throw domain_1.CustomError.notFound("Player not found");
            return player;
        });
    }
    findOnePlayerByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const player = yield data_1.Player.findOne({
                where: {
                    name
                }
            });
            if (player)
                throw domain_1.CustomError.badRequest("This name is already taken");
            return player;
        });
    }
}
exports.PlayerService = PlayerService;
