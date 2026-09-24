"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TronalddumpError = void 0;
class TronalddumpError extends Error {
    isTronalddumpError = true;
    sdk = 'Tronalddump';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.TronalddumpError = TronalddumpError;
//# sourceMappingURL=TronalddumpError.js.map