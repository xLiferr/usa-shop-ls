import {MigrationInterface, QueryRunner} from "typeorm";

export class changes1657270132478 implements MigrationInterface {
    name = 'changes1657270132478'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_detail" DROP CONSTRAINT "FK_e16047482001ddeb5dd2e657613"`);
        await queryRunner.query(`ALTER TABLE "order_detail" DROP CONSTRAINT "UQ_e16047482001ddeb5dd2e657613"`);
        await queryRunner.query(`ALTER TABLE "order_detail" DROP COLUMN "payment_id"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "type" character varying`);
        await queryRunner.query(`ALTER TABLE "order_detail" ADD "date" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order_detail" ADD "flow_order" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order_detail" ADD "status" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_detail" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "order_detail" DROP COLUMN "flow_order"`);
        await queryRunner.query(`ALTER TABLE "order_detail" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "order_detail" ADD "payment_id" integer`);
        await queryRunner.query(`ALTER TABLE "order_detail" ADD CONSTRAINT "UQ_e16047482001ddeb5dd2e657613" UNIQUE ("payment_id")`);
        await queryRunner.query(`ALTER TABLE "order_detail" ADD CONSTRAINT "FK_e16047482001ddeb5dd2e657613" FOREIGN KEY ("payment_id") REFERENCES "payment_detail"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
