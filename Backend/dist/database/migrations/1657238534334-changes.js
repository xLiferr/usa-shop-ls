"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changes1657238534334 = void 0;
class changes1657238534334 {
    constructor() {
        this.name = 'changes1657238534334';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "avatarId" TO "avatar_id"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "avatar_id" TO "avatarId"`);
    }
}
exports.changes1657238534334 = changes1657238534334;
//# sourceMappingURL=1657238534334-changes.js.map