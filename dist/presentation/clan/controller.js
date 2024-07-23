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
exports.ClanController = void 0;
const domain_1 = require("../../domain");
const create_clan_dto_1 = require("../../domain/dtos/clan/create-clan.dto");
const data_1 = require("../../data");
class ClanController {
    constructor(clanService) {
        this.clanService = clanService;
        this.handleError = (error, res) => {
            if (error instanceof domain_1.CustomError) {
                return res.status(error.statusCode).json({ message: error.message });
            }
            console.log(error);
            return res.status(500).json({ message: 'Something went very wrong! 🧨' });
        };
        this.addMemberToClan = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { playerReceiverId } = req.params;
            const [error, joinMemberDTO] = domain_1.JoinMember.create(req.body);
            if (error)
                return res.status(422).json({ message: error });
            this.clanService.addMemberToClan(+playerReceiverId, joinMemberDTO)
                .then(resp => res.status(200).json({ message: 'Member added to clan' }))
                .catch(error => this.handleError(error, res));
        });
        this.createClan = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createClanDTO] = create_clan_dto_1.CreateClanDTO.create(req.body);
            if (error)
                return res.status(422).json({ message: 'Internal server Error' });
            this.clanService.createClan(createClanDTO)
                .then(clan => {
                return res.status(201).json(clan);
            })
                .catch(error => this.handleError(error, res));
        });
        this.findClanByMember = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            if (!id)
                return res.status(400).json({ message: 'El id no es un número' });
            this.clanService.findClanByIdMember(+id)
                .then(clamMember => {
                return res.status(200).json(data_1.ClanMember);
            })
                .catch(error => this.handleError(error, res));
        });
    }
}
exports.ClanController = ClanController;
