import {MigrationInterface, QueryRunner} from "typeorm";

export class algo1657257668276 implements MigrationInterface {
    name = 'algo1657257668276'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "avatar_id" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD "img_id" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "UQ_717ef9496d87f376e9e264d7eb0" UNIQUE ("img_id")`);
        await queryRunner.query(`ALTER TABLE "file" ADD CONSTRAINT "UQ_51e2d4c72df88f28a560615379f" UNIQUE ("filename")`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_717ef9496d87f376e9e264d7eb0" FOREIGN KEY ("img_id") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_717ef9496d87f376e9e264d7eb0"`);
        await queryRunner.query(`ALTER TABLE "file" DROP CONSTRAINT "UQ_51e2d4c72df88f28a560615379f"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "UQ_717ef9496d87f376e9e264d7eb0"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "img_id"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "avatar_id"`);
    }

}
