
import type { NextApiRequest, NextApiResponse } from 'next'
import { IOrderType, OrderItem } from '../../../types';
import CryptoJS from 'crypto-js';
 import axios from 'axios';
import FormData from 'form-data';
import request from 'request'


const url = 'http://localhost:3000' || process.env.URL

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  // console.log(req.body)


  var formdata = new FormData();

   const tempDay = new Date();

  const day = tempDay.toUTCString();

    const check = {
    PAYGATE_ID: '10011072130',
    REFERENCE: `${req.body.id}`,
    AMOUNT:  req.body.order_total*100,
    CURRENCY: 'ZAR',
    RETURN_URL: `http://localhost:3000/account/orders/result`,
    TRANSACTION_DATE:  `${day}`,
    LOCALE: 'en-za',
    COUNTRY: 'ZAF',
    EMAIL:  `${req.body.email}`,
    PAYGATE_SECRET: 'secret',
  };

  const checkString = `${check.PAYGATE_ID}${check.REFERENCE}${check.AMOUNT}${check.CURRENCY}${check.RETURN_URL}${check.TRANSACTION_DATE}${check.LOCALE}${check.COUNTRY}${check.EMAIL}${check.PAYGATE_SECRET}`;

  const checksum = CryptoJS.MD5(checkString);

  const sum = checksum.toString()

//   console.log({sum})


// formdata.append('PAYGATE_ID', '10011072130');
// formdata.append('REFERENCE', req.body.id);
// formdata.append('AMOUNT', req.body.order_total);
// formdata.append('CURRENCY', 'ZAR');
// formdata.append('RETURN_URL', `http://localhost:3000/account/orders/result`);
// formdata.append('TRANSACTION_DATE', day);
// formdata.append('LOCALE', 'en-za');
// formdata.append('COUNTRY', 'ZAF');
// formdata.append('EMAIL', req.body.email);
// formdata.append('CHECKSUM', sum);







// const initiate = await fetch("https://secure.paygate.co.za/payweb3/initiate.trans", {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//      PAYGATE_ID: '10011072130',
//     REFERENCE:  `${req.body.id}`,
//     AMOUNT: `${req.body.order_total}`,
//     CURRENCY: 'ZAR',
//     RETURN_URL: `http://localhost:3000/account/orders/result`,
//     TRANSACTION_DATE: `${day}`,
//     LOCALE: 'en-za',
//     COUNTRY: 'ZAF',
//     EMAIL: `${req.body.email}`,
//     CHECKSUM: `${sum}`,
//   })
// })

// let response = await initiate

// console.log(response)

// res.send(response)


let options = {
  'method': 'POST',
  formData: {
    'PAYGATE_ID': '10011072130',
    'REFERENCE': `${req.body.id}`,
    'AMOUNT': `${req.body.order_total*100}`,
    'CURRENCY': 'ZAR',
    'RETURN_URL': `http://localhost:3000/account/orders/result`,
    'TRANSACTION_DATE': `${day}`,
    'LOCALE': 'en-za',
    'COUNTRY': 'ZAF',
    'EMAIL': `${req.body.email}`,
    'CHECKSUM': `${sum}`
  }
};

console.log(options)


 const payRes = await fetch(
    'https://secure.paygate.co.za/payweb3/initiate.trans',
    options,
  )
    .then((response) => response.text())
    .then((result) => {
      const arr = result.split('&');
      console.log(arr);

      return arr;
    })
    .catch((error) => console.log('error', error));

    console.log(payRes)

    res.send(payRes)

}
