"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changes1657219662753 = void 0;
class changes1657219662753 {
    constructor() {
        this.name = 'changes1657219662753';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "file" ("id" SERIAL NOT NULL, "filename" character varying NOT NULL, "data" bytea NOT NULL, CONSTRAINT "PK_36b46d232307066b3a2c9ea3a1d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product" ADD "gender" character varying`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_0dce9bc93c2d2c399982d04bef1"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "UQ_0dce9bc93c2d2c399982d04bef1"`);
        await queryRunner.query(`ALTER TABLE "user_address" DROP CONSTRAINT "FK_29d6df815a78e4c8291d3cf5e53"`);
        await queryRunner.query(`ALTER TABLE "user_address" DROP CONSTRAINT "UQ_29d6df815a78e4c8291d3cf5e53"`);
        await queryRunner.query(`ALTER TABLE "user_payment" DROP CONSTRAINT "FK_6efb9a2e661adeeb884020052ba"`);
        await queryRunner.query(`ALTER TABLE "user_payment" DROP COLUMN "account_no"`);
        await queryRunner.query(`ALTER TABLE "user_payment" ADD "account_no" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_payment" DROP CONSTRAINT "UQ_6efb9a2e661adeeb884020052ba"`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_0dce9bc93c2d2c399982d04bef1" FOREIGN KEY ("category_id") REFERENCES "product_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_address" ADD CONSTRAINT "FK_29d6df815a78e4c8291d3cf5e53" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_payment" ADD CONSTRAINT "FK_6efb9a2e661adeeb884020052ba" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_payment" DROP CONSTRAINT "FK_6efb9a2e661adeeb884020052ba"`);
        await queryRunner.query(`ALTER TABLE "user_address" DROP CONSTRAINT "FK_29d6df815a78e4c8291d3cf5e53"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_0dce9bc93c2d2c399982d04bef1"`);
        await queryRunner.query(`ALTER TABLE "user_payment" ADD CONSTRAINT "UQ_6efb9a2e661adeeb884020052ba" UNIQUE ("user_id")`);
        await queryRunner.query(`ALTER TABLE "user_payment" DROP COLUMN "account_no"`);
        await queryRunner.query(`ALTER TABLE "user_payment" ADD "account_no" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_payment" ADD CONSTRAINT "FK_6efb9a2e661adeeb884020052ba" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_address" ADD CONSTRAINT "UQ_29d6df815a78e4c8291d3cf5e53" UNIQUE ("user_id")`);
        await queryRunner.query(`ALTER TABLE "user_address" ADD CONSTRAINT "FK_29d6df815a78e4c8291d3cf5e53" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "UQ_0dce9bc93c2d2c399982d04bef1" UNIQUE ("category_id")`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_0dce9bc93c2d2c399982d04bef1" FOREIGN KEY ("category_id") REFERENCES "product_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "gender"`);
        await queryRunner.query(`DROP TABLE "file"`);
    }
}
exports.changes1657219662753 = changes1657219662753;
//# sourceMappingURL=1657219662753-changes.js.map