"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bcryptAdapter = void 0;
const bcryptjs_1 = require("bcryptjs");
exports.bcryptAdapter = {
    hash: (password) => {
        const salt = (0, bcryptjs_1.genSaltSync)(12); // valor por defecto que tiene es 10
        return (0, bcryptjs_1.hashSync)(password, salt);
    },
    compare: (bodyPassword, hashedPassword) => {
        return (0, bcryptjs_1.compareSync)(bodyPassword, hashedPassword);
    }
};
