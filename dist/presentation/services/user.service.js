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
exports.UserService = void 0;
const bcrypt_adapter_1 = require("../../config/bcrypt.adapter");
const jwt_adapter_1 = require("../../config/jwt.adapter");
const data_1 = require("../../data");
const domain_1 = require("../../domain");
class UserService {
    findeOneUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield data_1.User.findOne({
                where: {
                    id
                },
                relations: ['players'],
            });
            if (!user)
                throw domain_1.CustomError.notFound("User not found");
            return user;
        });
    }
    login(loginUserDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password, username } = loginUserDTO;
            const user = yield data_1.User.findOne({
                where: [
                    { email },
                    { username }
                ]
            });
            if (!user)
                throw domain_1.CustomError.unAuthorized("Invalid email or password");
            const isMatching = bcrypt_adapter_1.bcryptAdapter.compare(password, user.password);
            if (!isMatching)
                throw domain_1.CustomError.unAuthorized("Invalid email or password");
            const token = yield jwt_adapter_1.JwtAdapter.generateToken({ id: user.id });
            if (!token)
                throw domain_1.CustomError.internalServer("Error while creating JWT");
            return {
                token,
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                }
            };
        });
    }
    register(createUserDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, username } = createUserDTO;
            const existUser = yield data_1.User.findOne({
                where: [
                    { email },
                    { username }
                ]
            });
            if (existUser) {
                if (existUser.email === email) {
                    throw domain_1.CustomError.badRequest("This email is already taken");
                }
                if (existUser.username === username) {
                    throw domain_1.CustomError.badRequest("This username is already taken");
                }
            }
            const user = new data_1.User();
            user.email = email;
            user.username = username;
            user.password = bcrypt_adapter_1.bcryptAdapter.hash(createUserDTO.password);
            try {
                return yield user.save();
            }
            catch (error) {
                throw domain_1.CustomError.internalServer("Something went wrong");
            }
        });
    }
}
exports.UserService = UserService;
