"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClanDTO = void 0;
class CreateClanDTO {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
    static create(object) {
        const { name, description } = object;
        if (!name)
            return ['name is required'];
        if (!description)
            return ['description is required'];
        return [undefined, new CreateClanDTO(name, description)];
    }
}
exports.CreateClanDTO = CreateClanDTO;
