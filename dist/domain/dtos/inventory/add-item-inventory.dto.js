"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddItemToIventory = void 0;
class AddItemToIventory {
    constructor(quantity, itemId, resourceId) {
        this.quantity = quantity;
        this.itemId = itemId;
        this.resourceId = resourceId;
    }
    static create(object) {
        const { itemId, quantity, resourceId } = object;
        if (!quantity)
            return ['Missing quantity'];
        if (!itemId && !resourceId)
            return ['Missing itemId or resourceId'];
        return [undefined, new AddItemToIventory(quantity, itemId, resourceId)];
    }
}
exports.AddItemToIventory = AddItemToIventory;
