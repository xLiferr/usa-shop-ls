"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changesProduct1653256245504 = void 0;
class changesProduct1653256245504 {
    constructor() {
        this.name = 'changesProduct1653256245504';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "product_category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_0dce9bc93c2d2c399982d04bef1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "stock" integer NOT NULL, "price" integer NOT NULL, "categoryId" integer, CONSTRAINT "UQ_22cc43e9a74d7498546e9a63e77" UNIQUE ("name"), CONSTRAINT "REL_ff0c0301a95e517153df97f681" UNIQUE ("categoryId"), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_ff0c0301a95e517153df97f6812" FOREIGN KEY ("categoryId") REFERENCES "product_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_ff0c0301a95e517153df97f6812"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "product_category"`);
    }
}
exports.changesProduct1653256245504 = changesProduct1653256245504;
//# sourceMappingURL=1653256245504-changes%20product.js.map