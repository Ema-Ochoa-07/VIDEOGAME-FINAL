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
exports.UserController = void 0;
const domain_1 = require("../../domain");
class UserController {
    constructor(userService) {
        this.userService = userService;
        this.handleError = (error, res) => {
            if (error instanceof domain_1.CustomError) {
                return res.status(error.statusCode).json({ message: error.message });
            }
            console.log(error);
            return res.status(500).json({ message: 'Something went very wrong! 🧨' });
        };
        this.findOneUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            this.userService.findeOneUser(+id)
                .then(user => res.status(200).json(user))
                .catch(error => this.handleError(error, res));
        });
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, loginUserDTO] = domain_1.LoginUserDTO.create(req.body);
            if (error)
                return res.status(422).json({ message: error });
            this.userService.login(loginUserDTO)
                .then(user => res.status(200).json(user))
                .catch(error => this.handleError(error, res));
        });
        this.register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [error, createUserDTO] = domain_1.CreateUserDTO.create(req.body);
            if (error)
                return res.status(422).json({ message: error });
            this.userService.register(createUserDTO)
                .then(user => res.status(200).json(user))
                .catch(error => this.handleError(error, res));
        });
    }
}
exports.UserController = UserController;
