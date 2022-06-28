"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changes1656451393423 = void 0;
class changes1656451393423 {
    constructor() {
        this.name = 'changes1656451393423';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username")`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
    }
}
exports.changes1656451393423 = changes1656451393423;
//# sourceMappingURL=1656451393423-changes.js.map