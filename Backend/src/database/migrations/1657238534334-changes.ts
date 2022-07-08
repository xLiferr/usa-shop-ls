import {MigrationInterface, QueryRunner} from "typeorm";

export class changes1657238534334 implements MigrationInterface {
    name = 'changes1657238534334'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "avatarId" TO "avatar_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "avatar_id" TO "avatarId"`);
    }

}
