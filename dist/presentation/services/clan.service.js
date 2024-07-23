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
exports.ClanService = void 0;
const data_1 = require("../../data");
const domain_1 = require("../../domain");
class ClanService {
    constructor(playerService) {
        this.playerService = playerService;
    }
    addMemberToClan(playerReceiverId, joinMemberDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const playerReceiverPromise = this.playerService.findOnePlayer(playerReceiverId);
            const playerSenderPromise = this.playerService.findOnePlayer(joinMemberDTO.senderMemberId);
            const [playerReceiver, playerSender] = yield Promise.all([playerReceiverPromise, playerSenderPromise]);
            if (!playerReceiver)
                throw domain_1.CustomError.notFound("Player Receiver not found");
            if (!playerSender)
                throw domain_1.CustomError.notFound("Player Sender not found");
            const allowedRoles = [data_1.ClanMemberRole.MASTER, data_1.ClanMemberRole.OFFICER, data_1.ClanMemberRole.SUBOFFICER];
            if (!allowedRoles.includes(playerSender.clanMembers[0].role)) {
                throw domain_1.CustomError.badRequest("You don't have permission to join this clan");
            }
            const clanMember = new data_1.ClanMember();
            clanMember.player = playerReceiver;
            clanMember.clan = playerSender.clanMembers[0].clan;
            try {
                return yield clanMember.save();
            }
            catch (error) {
                throw domain_1.CustomError.internalServer("Something went wrong");
            }
        });
    }
    createClan(createClanDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clan = new data_1.Clan;
                clan.name = createClanDTO.name;
                clan.description = createClanDTO.description;
                return yield clan.save();
            }
            catch (error) {
                throw domain_1.CustomError.internalServer('Internal server Error 🧨');
            }
        });
    }
    findClanByIdMember(idMember) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const member = yield data_1.ClanMember.findOne({
                    where: {
                        id: idMember
                    },
                    relations: ['clan']
                });
                if (!member)
                    throw domain_1.CustomError.notFound('Member not found');
                const clanMember = member.clan;
                return clanMember;
            }
            catch (error) {
                throw domain_1.CustomError.internalServer('Internal server Errorrr 🧨');
            }
        });
    }
}
exports.ClanService = ClanService;
