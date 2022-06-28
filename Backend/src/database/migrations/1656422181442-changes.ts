import {MigrationInterface, QueryRunner} from "typeorm";

export class changes1656422181442 implements MigrationInterface {
    name = 'changes1656422181442'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "shopping_session" ("id" SERIAL NOT NULL, "total" integer NOT NULL, "userId" integer, CONSTRAINT "REL_e28060db40e87227705fb2d836" UNIQUE ("userId"), CONSTRAINT "PK_6ed992315207dbf9c02cce3693c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cart_item" ("id" SERIAL NOT NULL, "quantity" integer NOT NULL, "sessionId" integer, "productId" integer, CONSTRAINT "REL_9d9abc57e2c675ba7dd17ca34f" UNIQUE ("sessionId"), CONSTRAINT "REL_75db0de134fe0f9fe9e4591b7b" UNIQUE ("productId"), CONSTRAINT "PK_bd94725aa84f8cf37632bcde997" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order_detail" ("id" SERIAL NOT NULL, "total" integer NOT NULL, "userId" integer, "paymentId" integer, CONSTRAINT "REL_eaf8b34b5ccbb5273056e06413" UNIQUE ("paymentId"), CONSTRAINT "PK_0afbab1fa98e2fb0be8e74f6b38" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payment_detail" ("id" SERIAL NOT NULL, "amount" integer NOT NULL, "provider" character varying NOT NULL, "status" character varying NOT NULL, "orderId" integer, CONSTRAINT "REL_a3771bd86dcdde381af8dda402" UNIQUE ("orderId"), CONSTRAINT "PK_baeeedc69241f6ea2ee27443dc9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order_item" ("id" SERIAL NOT NULL, "quantity" integer NOT NULL, "orderId" integer, "productId" integer, CONSTRAINT "REL_646bf9ece6f45dbe41c203e06e" UNIQUE ("orderId"), CONSTRAINT "REL_904370c093ceea4369659a3c81" UNIQUE ("productId"), CONSTRAINT "PK_d01158fe15b1ead5c26fd7f4e90" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "shopping_session" ADD CONSTRAINT "FK_e28060db40e87227705fb2d8364" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart_item" ADD CONSTRAINT "FK_9d9abc57e2c675ba7dd17ca34f0" FOREIGN KEY ("sessionId") REFERENCES "shopping_session"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart_item" ADD CONSTRAINT "FK_75db0de134fe0f9fe9e4591b7bf" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_detail" ADD CONSTRAINT "FK_ede5a8019944c072dfb8eaf23ee" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_detail" ADD CONSTRAINT "FK_eaf8b34b5ccbb5273056e06413a" FOREIGN KEY ("paymentId") REFERENCES "payment_detail"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payment_detail" ADD CONSTRAINT "FK_a3771bd86dcdde381af8dda4022" FOREIGN KEY ("orderId") REFERENCES "order_detail"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "FK_646bf9ece6f45dbe41c203e06e0" FOREIGN KEY ("orderId") REFERENCES "order_detail"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "FK_904370c093ceea4369659a3c810" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "FK_904370c093ceea4369659a3c810"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "FK_646bf9ece6f45dbe41c203e06e0"`);
        await queryRunner.query(`ALTER TABLE "payment_detail" DROP CONSTRAINT "FK_a3771bd86dcdde381af8dda4022"`);
        await queryRunner.query(`ALTER TABLE "order_detail" DROP CONSTRAINT "FK_eaf8b34b5ccbb5273056e06413a"`);
        await queryRunner.query(`ALTER TABLE "order_detail" DROP CONSTRAINT "FK_ede5a8019944c072dfb8eaf23ee"`);
        await queryRunner.query(`ALTER TABLE "cart_item" DROP CONSTRAINT "FK_75db0de134fe0f9fe9e4591b7bf"`);
        await queryRunner.query(`ALTER TABLE "cart_item" DROP CONSTRAINT "FK_9d9abc57e2c675ba7dd17ca34f0"`);
        await queryRunner.query(`ALTER TABLE "shopping_session" DROP CONSTRAINT "FK_e28060db40e87227705fb2d8364"`);
        await queryRunner.query(`DROP TABLE "order_item"`);
        await queryRunner.query(`DROP TABLE "payment_detail"`);
        await queryRunner.query(`DROP TABLE "order_detail"`);
        await queryRunner.query(`DROP TABLE "cart_item"`);
        await queryRunner.query(`DROP TABLE "shopping_session"`);
    }

}
