"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlayerDTO = void 0;
class CreatePlayerDTO {
    constructor(name) {
        this.name = name;
    }
    static create(object) {
        const { name } = object;
        if (!name)
            return ['name is required'];
        return [undefined, new CreatePlayerDTO(name)];
    }
}
exports.CreatePlayerDTO = CreatePlayerDTO;
