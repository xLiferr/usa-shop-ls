import {MigrationInterface, QueryRunner} from "typeorm";

export class changes1656451393423 implements MigrationInterface {
    name = 'changes1656451393423'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
    }

}
