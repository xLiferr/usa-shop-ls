"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myInit1652193664762 = void 0;
class myInit1652193664762 {
    constructor() {
        this.name = 'myInit1652193664762';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "name" character varying NOT NULL, "second_name" character varying NOT NULL, "telephone" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
exports.myInit1652193664762 = myInit1652193664762;
//# sourceMappingURL=1652193664762-my_init.js.map