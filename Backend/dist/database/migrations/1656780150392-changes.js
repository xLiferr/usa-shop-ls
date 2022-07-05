"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changes1656780150392 = void 0;
class changes1656780150392 {
    constructor() {
        this.name = 'changes1656780150392';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_payment" DROP CONSTRAINT "FK_6efb9a2e661adeeb884020052ba"`);
        await queryRunner.query(`ALTER TABLE "user_payment" DROP CONSTRAINT "UQ_6efb9a2e661adeeb884020052ba"`);
        await queryRunner.query(`ALTER TABLE "user_payment" ADD CONSTRAINT "FK_6efb9a2e661adeeb884020052ba" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_payment" DROP CONSTRAINT "FK_6efb9a2e661adeeb884020052ba"`);
        await queryRunner.query(`ALTER TABLE "user_payment" ADD CONSTRAINT "UQ_6efb9a2e661adeeb884020052ba" UNIQUE ("user_id")`);
        await queryRunner.query(`ALTER TABLE "user_payment" ADD CONSTRAINT "FK_6efb9a2e661adeeb884020052ba" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.changes1656780150392 = changes1656780150392;
//# sourceMappingURL=1656780150392-changes.js.map