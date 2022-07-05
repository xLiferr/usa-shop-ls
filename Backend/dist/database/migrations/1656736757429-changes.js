"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changes1656736757429 = void 0;
class changes1656736757429 {
    constructor() {
        this.name = 'changes1656736757429';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_0dce9bc93c2d2c399982d04bef1"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "UQ_0dce9bc93c2d2c399982d04bef1"`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_0dce9bc93c2d2c399982d04bef1" FOREIGN KEY ("category_id") REFERENCES "product_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_0dce9bc93c2d2c399982d04bef1"`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "UQ_0dce9bc93c2d2c399982d04bef1" UNIQUE ("category_id")`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_0dce9bc93c2d2c399982d04bef1" FOREIGN KEY ("category_id") REFERENCES "product_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.changes1656736757429 = changes1656736757429;
//# sourceMappingURL=1656736757429-changes.js.map