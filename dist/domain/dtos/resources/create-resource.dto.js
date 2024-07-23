"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateResourceDTO = void 0;
class CreateResourceDTO {
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
        return [undefined, new CreateResourceDTO(name, description)];
    }
}
exports.CreateResourceDTO = CreateResourceDTO;
