import {MigrationInterface, QueryRunner} from "typeorm";

export class changes1653255160328 implements MigrationInterface {
    name = 'changes1653255160328'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_address" ("id" SERIAL NOT NULL, "address" character varying NOT NULL, "city" character varying NOT NULL, "postal_code" integer NOT NULL, "country" character varying NOT NULL, "telephone" character varying, "mobile" character varying NOT NULL, "userId" integer, CONSTRAINT "REL_1abd8badc4a127b0f357d9ecbc" UNIQUE ("userId"), CONSTRAINT "PK_302d96673413455481d5ff4022a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_payment" ("id" SERIAL NOT NULL, "payment_type" character varying NOT NULL, "provider" character varying NOT NULL, "account_no" integer NOT NULL, "expiry" TIMESTAMP NOT NULL, "userId" integer, CONSTRAINT "REL_9a70c56afa711c69a105c73de1" UNIQUE ("userId"), CONSTRAINT "PK_57db108902981ff1f5fcc2f2336" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_address" ADD CONSTRAINT "FK_1abd8badc4a127b0f357d9ecbc2" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_payment" ADD CONSTRAINT "FK_9a70c56afa711c69a105c73de1a" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_payment" DROP CONSTRAINT "FK_9a70c56afa711c69a105c73de1a"`);
        await queryRunner.query(`ALTER TABLE "user_address" DROP CONSTRAINT "FK_1abd8badc4a127b0f357d9ecbc2"`);
        await queryRunner.query(`DROP TABLE "user_payment"`);
        await queryRunner.query(`DROP TABLE "user_address"`);
    }

}
