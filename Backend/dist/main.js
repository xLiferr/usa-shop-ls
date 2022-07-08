"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
var CryptoJS = require("crypto-js");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    let secretKey = "4cb075f856eae7f46b402ddf8c34b0b8956f8be7";
    let amount = 10990;
    let apiKey = "5EDA7FE6-A51E-4215-83EF-1L0CDEBF2152";
    let commerceOrder = 123456;
    let currency = "CLP";
    let email = "dibiridap@gmail.com";
    let subject = "Pago de prueba";
    let urlConfirmation = "http://localhost:3000/order-detail/compraaa";
    let urlReturn = "https://www.google.com";
    let token = 'DF2EB886A428ECE3E2BF28F687D8C558160D4F4A';
    let object = "amount" + amount + "apiKey" + apiKey + "commerceOrder" + commerceOrder + "currency" + currency + "email" + email + "subject" + subject + "urlConfirmation" + urlConfirmation + "urlReturn" + urlReturn;
    let object2 = "apiKey" + apiKey + "token" + token;
    let sign2 = CryptoJS.HmacSHA256(object2, secretKey);
    let sign = CryptoJS.HmacSHA256(object, secretKey);
    console.log(sign.toString());
    console.log("el 2");
    console.log(sign2.toString());
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map