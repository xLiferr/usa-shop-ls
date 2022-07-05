"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changes1656780000813 = void 0;
class changes1656780000813 {
    constructor() {
        this.name = 'changes1656780000813';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_payment" DROP COLUMN "account_no"`);
        await queryRunner.query(`ALTER TABLE "user_payment" ADD "account_no" character varying NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_payment" DROP COLUMN "account_no"`);
        await queryRunner.query(`ALTER TABLE "user_payment" ADD "account_no" integer NOT NULL`);
    }
}
exports.changes1656780000813 = changes1656780000813;
//# sourceMappingURL=1656780000813-changes.js.map