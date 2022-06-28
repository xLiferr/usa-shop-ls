"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changes1656452628568 = void 0;
class changes1656452628568 {
    constructor() {
        this.name = 'changes1656452628568';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_ff0c0301a95e517153df97f6812"`);
        await queryRunner.query(`ALTER TABLE "shopping_session" DROP CONSTRAINT "FK_e28060db40e87227705fb2d8364"`);
        await queryRunner.query(`ALTER TABLE "cart_item" DROP CONSTRAINT "FK_9d9abc57e2c675ba7dd17ca34f0"`);
        await queryRunner.query(`ALTER TABLE "payment_detail" DROP CONSTRAINT "FK_a3771bd86dcdde381af8dda4022"`);
        await queryRunner.query(`ALTER TABLE "order_detail" DROP CONSTRAINT "FK_eaf8b34b5ccbb5273056e06413a"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "FK_646bf9ece6f45dbe41c203e06e0"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "FK_904370c093ceea4369659a3c810"`);
        await queryRunner.query(`ALTER TABLE "user_address" DROP CONSTRAINT "FK_1abd8badc4a127b0f357d9ecbc2"`);
        await queryRunner.query(`ALTER TABLE "user_payment" DROP CONSTRAINT "FK_9a70c56afa711c69a105c73de1a"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "categoryId" TO "category_id"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME CONSTRAINT "REL_ff0c0301a95e517153df97f681" TO "UQ_0dce9bc93c2d2c399982d04bef1"`);
        await queryRunner.query(`ALTER TABLE "shopping_session" RENAME COLUMN "userId" TO "user_id"`);
        await queryRunner.query(`ALTER TABLE "shopping_session" RENAME CONSTRAINT "REL_e28060db40e87227705fb2d836" TO "UQ_dfc5348e0094aa88e3a38b276c5"`);
        await queryRunner.query(`ALTER TABLE "cart_item" RENAME COLUMN "sessionId" TO "session_id"`);
        await queryRunner.query(`ALTER TABLE "cart_item" RENAME CONSTRAINT "REL_9d9abc57e2c675ba7dd17ca34f" TO "UQ_86cdc971c3b83368fc48c4f51bd"`);
        await queryRunner.query(`ALTER TABLE "payment_detail" RENAME COLUMN "orderId" TO "order_id"`);
        await queryRunner.query(`ALTER TABLE "payment_detail" RENAME CONSTRAINT "REL_a3771bd86dcdde381af8dda402" TO "UQ_e9dfe3f7bdc0fc0ce2509e7650f"`);
        await queryRunner.query(`ALTER TABLE "order_detail" RENAME COLUMN "paymentId" TO "payment_id"`);
        await queryRunner.query(`ALTER TABLE "order_detail" RENAME CONSTRAINT "REL_eaf8b34b5ccbb5273056e06413" TO "UQ_e16047482001ddeb5dd2e657613"`);
        await queryRunner.query(`ALTER TABLE "user_address" RENAME COLUMN "userId" TO "user_id"`);
        await queryRunner.query(`ALTER TABLE "user_address" RENAME CONSTRAINT "REL_1abd8badc4a127b0f357d9ecbc" TO "UQ_29d6df815a78e4c8291d3cf5e53"`);
        await queryRunner.query(`ALTER TABLE "user_payment" RENAME COLUMN "userId" TO "user_id"`);
        await queryRunner.query(`ALTER TABLE "user_payment" RENAME CONSTRAINT "REL_9a70c56afa711c69a105c73de1" TO "UQ_6efb9a2e661adeeb884020052ba"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "REL_646bf9ece6f45dbe41c203e06e"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "orderId"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "REL_904370c093ceea4369659a3c81"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "productId"`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD "order_id" integer`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "UQ_e9674a6053adbaa1057848cddfa" UNIQUE ("order_id")`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD "product_id" integer`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "UQ_5e17c017aa3f5164cb2da5b1c6b" UNIQUE ("product_id")`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_0dce9bc93c2d2c399982d04bef1" FOREIGN KEY ("category_id") REFERENCES "product_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shopping_session" ADD CONSTRAINT "FK_dfc5348e0094aa88e3a38b276c5" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart_item" ADD CONSTRAINT "FK_86cdc971c3b83368fc48c4f51bd" FOREIGN KEY ("session_id") REFERENCES "shopping_session"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payment_detail" ADD CONSTRAINT "FK_e9dfe3f7bdc0fc0ce2509e7650f" FOREIGN KEY ("order_id") REFERENCES "order_detail"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_detail" ADD CONSTRAINT "FK_e16047482001ddeb5dd2e657613" FOREIGN KEY ("payment_id") REFERENCES "payment_detail"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "FK_e9674a6053adbaa1057848cddfa" FOREIGN KEY ("order_id") REFERENCES "order_detail"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "FK_5e17c017aa3f5164cb2da5b1c6b" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_address" ADD CONSTRAINT "FK_29d6df815a78e4c8291d3cf5e53" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_payment" ADD CONSTRAINT "FK_6efb9a2e661adeeb884020052ba" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user_payment" DROP CONSTRAINT "FK_6efb9a2e661adeeb884020052ba"`);
        await queryRunner.query(`ALTER TABLE "user_address" DROP CONSTRAINT "FK_29d6df815a78e4c8291d3cf5e53"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "FK_5e17c017aa3f5164cb2da5b1c6b"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "FK_e9674a6053adbaa1057848cddfa"`);
        await queryRunner.query(`ALTER TABLE "order_detail" DROP CONSTRAINT "FK_e16047482001ddeb5dd2e657613"`);
        await queryRunner.query(`ALTER TABLE "payment_detail" DROP CONSTRAINT "FK_e9dfe3f7bdc0fc0ce2509e7650f"`);
        await queryRunner.query(`ALTER TABLE "cart_item" DROP CONSTRAINT "FK_86cdc971c3b83368fc48c4f51bd"`);
        await queryRunner.query(`ALTER TABLE "shopping_session" DROP CONSTRAINT "FK_dfc5348e0094aa88e3a38b276c5"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_0dce9bc93c2d2c399982d04bef1"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "UQ_5e17c017aa3f5164cb2da5b1c6b"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "product_id"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP CONSTRAINT "UQ_e9674a6053adbaa1057848cddfa"`);
        await queryRunner.query(`ALTER TABLE "order_item" DROP COLUMN "order_id"`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD "productId" integer`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "REL_904370c093ceea4369659a3c81" UNIQUE ("productId")`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD "orderId" integer`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "REL_646bf9ece6f45dbe41c203e06e" UNIQUE ("orderId")`);
        await queryRunner.query(`ALTER TABLE "user_payment" RENAME CONSTRAINT "UQ_6efb9a2e661adeeb884020052ba" TO "REL_9a70c56afa711c69a105c73de1"`);
        await queryRunner.query(`ALTER TABLE "user_payment" RENAME COLUMN "user_id" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "user_address" RENAME CONSTRAINT "UQ_29d6df815a78e4c8291d3cf5e53" TO "REL_1abd8badc4a127b0f357d9ecbc"`);
        await queryRunner.query(`ALTER TABLE "user_address" RENAME COLUMN "user_id" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "order_detail" RENAME CONSTRAINT "UQ_e16047482001ddeb5dd2e657613" TO "REL_eaf8b34b5ccbb5273056e06413"`);
        await queryRunner.query(`ALTER TABLE "order_detail" RENAME COLUMN "payment_id" TO "paymentId"`);
        await queryRunner.query(`ALTER TABLE "payment_detail" RENAME CONSTRAINT "UQ_e9dfe3f7bdc0fc0ce2509e7650f" TO "REL_a3771bd86dcdde381af8dda402"`);
        await queryRunner.query(`ALTER TABLE "payment_detail" RENAME COLUMN "order_id" TO "orderId"`);
        await queryRunner.query(`ALTER TABLE "cart_item" RENAME CONSTRAINT "UQ_86cdc971c3b83368fc48c4f51bd" TO "REL_9d9abc57e2c675ba7dd17ca34f"`);
        await queryRunner.query(`ALTER TABLE "cart_item" RENAME COLUMN "session_id" TO "sessionId"`);
        await queryRunner.query(`ALTER TABLE "shopping_session" RENAME CONSTRAINT "UQ_dfc5348e0094aa88e3a38b276c5" TO "REL_e28060db40e87227705fb2d836"`);
        await queryRunner.query(`ALTER TABLE "shopping_session" RENAME COLUMN "user_id" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME CONSTRAINT "UQ_0dce9bc93c2d2c399982d04bef1" TO "REL_ff0c0301a95e517153df97f681"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "category_id" TO "categoryId"`);
        await queryRunner.query(`ALTER TABLE "user_payment" ADD CONSTRAINT "FK_9a70c56afa711c69a105c73de1a" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_address" ADD CONSTRAINT "FK_1abd8badc4a127b0f357d9ecbc2" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "FK_904370c093ceea4369659a3c810" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_item" ADD CONSTRAINT "FK_646bf9ece6f45dbe41c203e06e0" FOREIGN KEY ("orderId") REFERENCES "order_detail"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_detail" ADD CONSTRAINT "FK_eaf8b34b5ccbb5273056e06413a" FOREIGN KEY ("paymentId") REFERENCES "payment_detail"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payment_detail" ADD CONSTRAINT "FK_a3771bd86dcdde381af8dda4022" FOREIGN KEY ("orderId") REFERENCES "order_detail"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart_item" ADD CONSTRAINT "FK_9d9abc57e2c675ba7dd17ca34f0" FOREIGN KEY ("sessionId") REFERENCES "shopping_session"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shopping_session" ADD CONSTRAINT "FK_e28060db40e87227705fb2d8364" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_ff0c0301a95e517153df97f6812" FOREIGN KEY ("categoryId") REFERENCES "product_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.changes1656452628568 = changes1656452628568;
//# sourceMappingURL=1656452628568-changes.js.map