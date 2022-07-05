import {MigrationInterface, QueryRunner} from "typeorm";

export class changes1656780150392 implements MigrationInterface {
    name = 'changes1656780150392'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_payment" DROP CONSTRAINT "FK_6efb9a2e661adeeb884020052ba"`);
        await queryRunner.query(`ALTER TABLE "user_payment" DROP CONSTRAINT "UQ_6efb9a2e661adeeb884020052ba"`);
        await queryRunner.query(`ALTER TABLE "user_payment" ADD CONSTRAINT "FK_6efb9a2e661adeeb884020052ba" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_payment" DROP CONSTRAINT "FK_6efb9a2e661adeeb884020052ba"`);
        await queryRunner.query(`ALTER TABLE "user_payment" ADD CONSTRAINT "UQ_6efb9a2e661adeeb884020052ba" UNIQUE ("user_id")`);
        await queryRunner.query(`ALTER TABLE "user_payment" ADD CONSTRAINT "FK_6efb9a2e661adeeb884020052ba" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
