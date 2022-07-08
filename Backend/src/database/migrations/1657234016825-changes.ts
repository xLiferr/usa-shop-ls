import {MigrationInterface, QueryRunner} from "typeorm";

export class changes1657234016825 implements MigrationInterface {
    name = 'changes1657234016825'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "file" ADD "product_id" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD "main_img" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "UQ_407ea86689f91de5b24a0e688c8" UNIQUE ("main_img")`);
        await queryRunner.query(`ALTER TABLE "file" ADD CONSTRAINT "FK_e4c65a52e0203d2daee81936bcc" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_407ea86689f91de5b24a0e688c8" FOREIGN KEY ("main_img") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_407ea86689f91de5b24a0e688c8"`);
        await queryRunner.query(`ALTER TABLE "file" DROP CONSTRAINT "FK_e4c65a52e0203d2daee81936bcc"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "UQ_407ea86689f91de5b24a0e688c8"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "main_img"`);
        await queryRunner.query(`ALTER TABLE "file" DROP COLUMN "product_id"`);
    }

}
