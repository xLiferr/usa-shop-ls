import {MigrationInterface, QueryRunner} from "typeorm";

export class changes1656452039084 implements MigrationInterface {
    name = 'changes1656452039084'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart_item" DROP CONSTRAINT "FK_75db0de134fe0f9fe9e4591b7bf"`);
        await queryRunner.query(`ALTER TABLE "cart_item" RENAME COLUMN "productId" TO "product_id"`);
        await queryRunner.query(`ALTER TABLE "cart_item" RENAME CONSTRAINT "REL_75db0de134fe0f9fe9e4591b7b" TO "UQ_67a2e8406e01ffa24ff9026944e"`);
        await queryRunner.query(`ALTER TABLE "cart_item" ADD CONSTRAINT "FK_67a2e8406e01ffa24ff9026944e" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart_item" DROP CONSTRAINT "FK_67a2e8406e01ffa24ff9026944e"`);
        await queryRunner.query(`ALTER TABLE "cart_item" RENAME CONSTRAINT "UQ_67a2e8406e01ffa24ff9026944e" TO "REL_75db0de134fe0f9fe9e4591b7b"`);
        await queryRunner.query(`ALTER TABLE "cart_item" RENAME COLUMN "product_id" TO "productId"`);
        await queryRunner.query(`ALTER TABLE "cart_item" ADD CONSTRAINT "FK_75db0de134fe0f9fe9e4591b7bf" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
