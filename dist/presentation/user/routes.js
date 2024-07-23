"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const user_service_1 = require("../services/user.service");
class UserRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const userService = new user_service_1.UserService();
        const userController = new controller_1.UserController(userService);
        router.get('/:id', userController.findOneUser);
        router.post('/login', userController.login);
        router.post('/register', userController.register);
        return router;
    }
}
exports.UserRoutes = UserRoutes;
