import { getUser, supabaseClient } from '@supabase/auth-helpers-nextjs'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {


    const {user} = await getUser({req, res})


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
    res.status(200).json({data: data})
      } catch (error) {
      res.status(400).json({data: error})
   }



}
