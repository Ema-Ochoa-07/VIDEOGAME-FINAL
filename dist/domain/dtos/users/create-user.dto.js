"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDTO = void 0;
class CreateUserDTO {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    static create(object) {
        const { email, password, username } = object;
        if (!username)
            return ['Missing username'];
        if (!email)
            return ['Missing email'];
        if (!password)
            return ['Missing password'];
        return [undefined, new CreateUserDTO(username, email, password)];
    }
}
exports.CreateUserDTO = CreateUserDTO;
