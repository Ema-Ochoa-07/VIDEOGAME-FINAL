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
exports.ConstructionController = void 0;
const domain_1 = require("../../domain");
class ConstructionController {
    constructor(constructionService) {
        this.constructionService = constructionService;
        this.handleError = (error, res) => {
            if (error instanceof domain_1.CustomError) {
                return res.status(error.statusCode).json({ message: error.message });
            }
            console.log(error);
            return res.status(500).json({ message: 'Something went very wrong! 🧨' });
        };
        this.getConstructions = (req, res) => __awaiter(this, void 0, void 0, function* () {
            this.constructionService.findConstructions()
                .then(construction => {
                return res.status(200).json(construction);
            })
                .catch(error => this.handleError(error, res));
        });
    }
}
exports.ConstructionController = ConstructionController;
