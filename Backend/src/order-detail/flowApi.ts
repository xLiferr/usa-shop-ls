const axios = require("axios");
const axiosRetry = require("axios-retry");
const CryptoJS = require("crypto-js");

axiosRetry(axios, { retries: 3 });

interface IPayment {
  url: string;
  token: string;
  flowOrder: number;
}

export class FlowApi {
  apiKey: string;
  secretKey: string;
  apiURL: string;
  static FlowStatus: { PENDING_PAYMENT: number; PAIED: number; REJECTED: number; CANCELED: number; };
  static PaymentMethod: { WEBPAY: number; SERVIPAG: number; MULTICAJA: number; ONEPAY: number; CRYPOMONEDA: number; TODOS_LOS_MEDIOS: number; };


  constructor({ apiKey, secretKey, apiURL }) {
    this.apiKey = apiKey;
    this.secretKey = secretKey;
    this.apiURL = apiURL;
  }
  send(service, params, method = "GET") {
    return new Promise<IPayment>(async (resolve, reject) => {
      method = method.toUpperCase();
      let url = `${this.apiURL}/${service}`;
      params = {
        apiKey: this.apiKey,
        ...params
      };
      let data = this.getPack(params, method);
      let sign = this.sign(params);
      let response;
      if (method == "GET") {
        response = await this.httpGet(url, data, sign);
      } else {
        response = await this.httpPost(url, data, sign);
      }

      if (!!response["info"]) {
        let code = response.info.http_code;
        let body = response.output;
        if (code === 200) {
          resolve(body);
        } else if ([400, 401].includes(code)) {
          reject(Error(body.message));
        } else {
          reject(Error("Unexpected error occurred. HTTP_CODE: " + code));
        }
      } else {
        reject(Error("Unexpected error occurred."));
      }
    });
  }
  getPack(params, method) {
    const keys = Object.keys(params)
      .map(key => key)
      .sort((a, b) => {
        if (a > b) return 1;
        else if (a < b) return -1;
        return 0;
      });
    let data = [];
    keys.map(key => {
      if (method == "GET") {
        data.push(
          encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
        );
      } else {
        data.push(key + "=" + params[key]);
      }
    });
    return data.join("&");
  }
  sign(params) {
    const keys = Object.keys(params)
      .map(key => key)
      .sort((a, b) => {
        if (a > b) return 1;
        else if (a < b) return -1;
        return 0;
      });
    let toSign = [];
    keys.map(key => {
      toSign.push(key + "=" + params[key]);
    });
    const toSignStr = toSign.join("&");

    return CryptoJS.HmacSHA256(toSignStr, this.secretKey);
  }
  httpGet(url, data, sign) {
    url = url + "?" + data + "&s=" + sign;

    return axios
      .get(url)
      .then(response => {
        return {
          output: response.data,
          info: {
            http_code: response.status
          }
        };
      })
      .catch(error => {
        return {
          output: error.response.data,
          info: {
            http_code: error.response.status
          }
        };
      });
  }
  httpPost(url, data, sign) {
    return axios
      .post(url, `${data}&s=${sign}`)
      .then(response => {
        return {
          output: response.data,
          info: {
            http_code: response.status
          }
        };
      })
      .catch(error => {
        return {
          output: error.response.data,
          info: {
            http_code: error.response.status
          }
        };
      });
  }
}
const FlowStatus = {
  PENDING_PAYMENT: 1,
  PAIED: 2,
  REJECTED: 3,
  CANCELED: 4
};
const PaymentMethod = {
  WEBPAY: 1,
  SERVIPAG: 2,
  MULTICAJA: 3,
  ONEPAY: 4,
  CRYPOMONEDA: 5,
  TODOS_LOS_MEDIOS: 9
};
FlowApi.FlowStatus = FlowStatus
FlowApi.PaymentMethod = PaymentMethod

export const config = {
  "apiKey": "5EDA7FE6-A51E-4215-83EF-1L0CDEBF2152",
  "secretKey": "4cb075f856eae7f46b402ddf8c34b0b8956f8be7",
  "apiURL": "https://sandbox.flow.cl/api",
  "baseURL": "http://localhost:3001/",
  "redirectURL":"http://localhost:3000/"
}