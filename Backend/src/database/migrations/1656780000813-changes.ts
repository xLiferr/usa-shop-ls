import {MigrationInterface, QueryRunner} from "typeorm";

export class changes1656780000813 implements MigrationInterface {
    name = 'changes1656780000813'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_payment" DROP COLUMN "account_no"`);
        await queryRunner.query(`ALTER TABLE "user_payment" ADD "account_no" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_payment" DROP COLUMN "account_no"`);
        await queryRunner.query(`ALTER TABLE "user_payment" ADD "account_no" integer NOT NULL`);
    }

}
