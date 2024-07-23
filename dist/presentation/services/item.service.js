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
exports.ItemService = void 0;
const data_1 = require("../../data");
const domain_1 = require("../../domain");
class ItemService {
    findOneItemById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield data_1.Item.findOne({
                where: {
                    id,
                }
            });
            if (!item)
                throw domain_1.CustomError.notFound("Item not found");
            return item;
        });
    }
}
exports.ItemService = ItemService;
