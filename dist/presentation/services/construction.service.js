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
exports.ConstructionService = void 0;
const data_1 = require("../../data");
const domain_1 = require("../../domain");
class ConstructionService {
    findConstructions() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield data_1.Construction.find();
            }
            catch (error) {
                throw domain_1.CustomError.internalServer('Internal server Error🧨');
            }
        });
    }
    findConstructionbyIdPlayer(idPlayer) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const player = yield data_1.Player.findOne({
                    where: {
                        id: idPlayer
                    },
                    relations: ['constructions']
                });
                if (!player)
                    throw domain_1.CustomError.notFound('Player not found');
                const construction = player.constructions;
                return construction;
            }
            catch (error) {
                throw domain_1.CustomError.internalServer('Internal server Error 🧨');
            }
        });
    }
}
exports.ConstructionService = ConstructionService;
