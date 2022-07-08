import {MigrationInterface, QueryRunner} from "typeorm";

export class changes1657234262144 implements MigrationInterface {
    name = 'changes1657234262144'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "file" ADD CONSTRAINT "UQ_51e2d4c72df88f28a560615379f" UNIQUE ("filename")`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_407ea86689f91de5b24a0e688c8"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "UQ_407ea86689f91de5b24a0e688c8"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "main_img"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "main_img" character varying`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "UQ_407ea86689f91de5b24a0e688c8" UNIQUE ("main_img")`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_407ea86689f91de5b24a0e688c8" FOREIGN KEY ("main_img") REFERENCES "file"("filename") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_407ea86689f91de5b24a0e688c8"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "UQ_407ea86689f91de5b24a0e688c8"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "main_img"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "main_img" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "UQ_407ea86689f91de5b24a0e688c8" UNIQUE ("main_img")`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_407ea86689f91de5b24a0e688c8" FOREIGN KEY ("main_img") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "file" DROP CONSTRAINT "UQ_51e2d4c72df88f28a560615379f"`);
    }

}
