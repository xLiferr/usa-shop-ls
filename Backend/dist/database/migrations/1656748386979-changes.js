"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changes1656748386979 = void 0;
class changes1656748386979 {
    constructor() {
        this.name = 'changes1656748386979';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_address" DROP CONSTRAINT "FK_29d6df815a78e4c8291d3cf5e53"`);
        await queryRunner.query(`ALTER TABLE "user_address" DROP CONSTRAINT "UQ_29d6df815a78e4c8291d3cf5e53"`);
        await queryRunner.query(`ALTER TABLE "user_address" ADD CONSTRAINT "FK_29d6df815a78e4c8291d3cf5e53" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_address" DROP CONSTRAINT "FK_29d6df815a78e4c8291d3cf5e53"`);
        await queryRunner.query(`ALTER TABLE "user_address" ADD CONSTRAINT "UQ_29d6df815a78e4c8291d3cf5e53" UNIQUE ("user_id")`);
        await queryRunner.query(`ALTER TABLE "user_address" ADD CONSTRAINT "FK_29d6df815a78e4c8291d3cf5e53" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.changes1656748386979 = changes1656748386979;
//# sourceMappingURL=1656748386979-changes.js.map