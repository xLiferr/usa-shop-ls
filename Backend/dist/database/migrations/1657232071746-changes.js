"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changes1657232071746 = void 0;
class changes1657232071746 {
    constructor() {
        this.name = 'changes1657232071746';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "file" ("id" SERIAL NOT NULL, "filename" character varying NOT NULL, "data" bytea NOT NULL, CONSTRAINT "PK_36b46d232307066b3a2c9ea3a1d" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "file"`);
    }
}
exports.changes1657232071746 = changes1657232071746;
//# sourceMappingURL=1657232071746-changes.js.map