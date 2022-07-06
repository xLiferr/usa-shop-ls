"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changes1657073061999 = void 0;
class changes1657073061999 {
    constructor() {
        this.name = 'changes1657073061999';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" ADD "gender" character varying`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "gender"`);
    }
}
exports.changes1657073061999 = changes1657073061999;
//# sourceMappingURL=1657073061999-changes.js.map