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
exports.PlayerController = void 0;
const domain_1 = require("../../domain");
class PlayerController {
    constructor(playerService, inventoryService, constructionService) {
        this.playerService = playerService;
        this.inventoryService = inventoryService;
        this.constructionService = constructionService;
        this.handleError = (error, res) => {
            if (error instanceof domain_1.CustomError) {
                return res.status(error.statusCode).json({ message: error.message });
            }
            console.log(error);
            return res.status(500).json({ message: 'Something went very wrong! 🧨' });
        };
        this.createPlayer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createPlayerDTO] = domain_1.CreatePlayerDTO.create(req.body);
            if (error)
                return res.status(422).json({ message: error });
            const sessionUserId = 1; // esto lo deberan sacar de la req.body.sessionUser
            this.playerService.createPlayer(createPlayerDTO, sessionUserId)
                .then(player => res.status(201).json(player))
                .catch(error => this.handleError(error, res));
        });
        this.findOnePlayer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            this.playerService.findOnePlayer(+id)
                .then(player => res.status(200).json(player))
                .catch(error => this.handleError(error, res));
        });
        this.addItemToInventory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id: playerId } = req.params; //id del player
            const [error, addItemToIventoryDTO] = domain_1.AddItemToIventory.create(req.body);
            if (error)
                return res.status(422).json({ message: error });
            this.inventoryService.addItemToInventory(+playerId, addItemToIventoryDTO)
                .then((resp) => res.status(200).json(resp))
                .catch(error => this.handleError(error, res));
        });
        this.getInventoryByPlayerId = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            if (isNaN(+id)) {
                return res.status(400).json({ message: 'EL id debe ser un número' });
            }
            this.inventoryService.findOneInventoryByPlayerId(+id)
                .then(inventory => {
                return res.status(200).json(inventory);
            })
                .catch((error) => this.handleError(error, res));
        });
        this.getConstructionByIdPlayer = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            if (isNaN(+id)) {
                return res.status(400).json({ message: 'El id no es un número' });
            }
            this.constructionService.findConstructionbyIdPlayer(+id)
                .then(construction => {
                return res.status(200).json(construction);
            })
                .catch(error => this.handleError(error, res));
        });
    }
}
exports.PlayerController = PlayerController;
