import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

var CryptoJS = require("crypto-js");

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  //"amount5000apiKeyXXXX-XXXX-XXXXcurrencyCLP"
  let secretKey = "4cb075f856eae7f46b402ddf8c34b0b8956f8be7"; //secretkey la obtienes desde el portal de flow
  let amount = 10990;
  let apiKey = "5EDA7FE6-A51E-4215-83EF-1L0CDEBF2152"; //apikey la obtienes desde el portal de flow
  let commerceOrder = 123456; //monto a cobrar
  let currency = "CLP"; //moneda a utilizar
  let email = "dibiridap@gmail.com"; //email del pagador
  let subject = "Pago de prueba"; //asunto
  let urlConfirmation = "http://localhost:3000/order-detail/compraaa";
  let urlReturn = "https://www.google.com";
  let token = 'DF2EB886A428ECE3E2BF28F687D8C558160D4F4A'
  //concatenacion de los parametros
  let object = "amount" + amount + "apiKey" + apiKey + "commerceOrder" + commerceOrder + "currency" + currency + "email" + email + "subject" + subject + "urlConfirmation" + urlConfirmation + "urlReturn" + urlReturn;
  let object2 = "apiKey" + apiKey + "token" + token;
  let sign2 = CryptoJS.HmacSHA256(object2, secretKey);
  //Firma de todos los parametros
  let sign = CryptoJS.HmacSHA256(object, secretKey);
  console.log(sign.toString());
  console.log("el 2")
  console.log(sign2.toString());
  await app.listen(3001);
}
bootstrap();
