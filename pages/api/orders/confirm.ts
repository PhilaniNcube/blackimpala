import { getUser, supabaseClient } from '@supabase/auth-helpers-nextjs'
import type { NextApiRequest, NextApiResponse } from 'next'
import CryptoJS from 'crypto-js';
 import axios from 'axios';
import FormData from 'form-data';
import request from 'request'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {


    const {user} = await getUser({req, res})

    const tempDay = new Date();

  const day = tempDay.toUTCString();

    const check = {
    PAYGATE_ID: '10011072130',
    REFERENCE: `${req.body.id}`,
    AMOUNT:  `${req.body.order_total}`,
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

  let payID = await fetch(`https://secure.paygate.co.za/payweb3/initiate.trans`, {
    method: 'POST',
    headers: {},
    body: JSON.stringify({
    'PAYGATE_ID': '10011072130',
    'REFERENCE': `${req.body.id}`,
    'AMOUNT': `${req.body.order_total}`,
    'CURRENCY': 'ZAR',
    'RETURN_URL': `http://localhost:3000/account/orders/result`,
    'TRANSACTION_DATE': `${day}`,
    'LOCALE': 'en-za',
    'COUNTRY': 'ZAF',
    'EMAIL': `${req.body.email}`,
    'CHECKSUM': `${sum}`
  })
  })

  let payIDResult = await payID.json()

  console.log(payIDResult)


  const { data, error } = await supabaseClient
  .from('orders')
  .insert([
    {
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      order_total: req.body.cartTotal,
      phone_number: req.body.phone_number,
      address: req.body.address,
      postal_code: req.body.postal_code,
      shipping: req.body.shipping,
      profile_id: user.id,
      order_items: req.body.cartItems,
    },
  ]).single()




   try {
    res.status(200).json({data: data, payID: payIDResult })
      } catch (error) {
      res.status(400).json({data: error})
   }



}
