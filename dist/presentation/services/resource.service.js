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
exports.ResourceService = void 0;
const data_1 = require("../../data");
const domain_1 = require("../../domain");
class ResourceService {
    findOneResourceById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resource = yield data_1.Resource.findOne({
                where: {
                    id: id
                }
            });
            if (!resource)
                throw domain_1.CustomError.notFound("Resource not found");
            return resource;
        });
    }
    findResourceAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield data_1.Resource.find();
            }
            catch (error) {
                throw domain_1.CustomError.internalServer('Internal server Error 🧨');
            }
        });
    }
    CreateResources(createResourceDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resource = new data_1.Resource;
                resource.name = createResourceDTO.name;
                resource.description = createResourceDTO.description;
                return yield resource.save();
            }
            catch (error) {
                throw domain_1.CustomError.internalServer('Internal server Error 🧨');
            }
        });
    }
}
exports.ResourceService = ResourceService;
