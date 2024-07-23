"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoinMember = void 0;
class JoinMember {
    constructor(senderMemberId) {
        this.senderMemberId = senderMemberId;
    }
    static create(object) {
        const { senderMemberId } = object;
        if (!senderMemberId)
            return ['senderMemberId is required'];
        return [undefined, new JoinMember(senderMemberId)];
    }
}
exports.JoinMember = JoinMember;
