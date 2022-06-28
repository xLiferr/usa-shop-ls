"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changes1656453043509 = void 0;
class changes1656453043509 {
    constructor() {
        this.name = 'changes1656453043509';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order_detail" DROP CONSTRAINT "FK_ede5a8019944c072dfb8eaf23ee"`);
        await queryRunner.query(`ALTER TABLE "order_detail" RENAME COLUMN "userId" TO "user_id"`);
        await queryRunner.query(`ALTER TABLE "order_detail" ADD CONSTRAINT "FK_0427dc0aa7c61eccc132d9daab2" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "order_detail" DROP CONSTRAINT "FK_0427dc0aa7c61eccc132d9daab2"`);
        await queryRunner.query(`ALTER TABLE "order_detail" RENAME COLUMN "user_id" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "order_detail" ADD CONSTRAINT "FK_ede5a8019944c072dfb8eaf23ee" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.changes1656453043509 = changes1656453043509;
//# sourceMappingURL=1656453043509-changes.js.map