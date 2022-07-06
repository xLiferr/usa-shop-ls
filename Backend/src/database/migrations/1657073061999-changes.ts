import {MigrationInterface, QueryRunner} from "typeorm";

export class changes1657073061999 implements MigrationInterface {
    name = 'changes1657073061999'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "gender" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "gender"`);
    }

}
