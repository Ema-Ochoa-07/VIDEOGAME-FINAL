"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserDTO = void 0;
class LoginUserDTO {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    static create(object) {
        const { email, password, username } = object;
        if (!username && !email)
            return ['Missing email or username'];
        if (!password)
            return ['Missing password'];
        return [undefined, new LoginUserDTO(username, email, password)];
    }
}
exports.LoginUserDTO = LoginUserDTO;
