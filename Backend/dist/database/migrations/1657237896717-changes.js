"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changes1657237896717 = void 0;
class changes1657237896717 {
    constructor() {
        this.name = 'changes1657237896717';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "file" DROP CONSTRAINT "FK_e4c65a52e0203d2daee81936bcc"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_407ea86689f91de5b24a0e688c8"`);
        await queryRunner.query(`ALTER TABLE "file" DROP COLUMN "product_id"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "UQ_407ea86689f91de5b24a0e688c8"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "main_img"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "avatarId" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD "img_id" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "UQ_717ef9496d87f376e9e264d7eb0" UNIQUE ("img_id")`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_717ef9496d87f376e9e264d7eb0" FOREIGN KEY ("img_id") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_717ef9496d87f376e9e264d7eb0"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "UQ_717ef9496d87f376e9e264d7eb0"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "img_id"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "avatarId"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "main_img" character varying`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "UQ_407ea86689f91de5b24a0e688c8" UNIQUE ("main_img")`);
        await queryRunner.query(`ALTER TABLE "file" ADD "product_id" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_407ea86689f91de5b24a0e688c8" FOREIGN KEY ("main_img") REFERENCES "file"("filename") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "file" ADD CONSTRAINT "FK_e4c65a52e0203d2daee81936bcc" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.changes1657237896717 = changes1657237896717;
//# sourceMappingURL=1657237896717-changes.js.map