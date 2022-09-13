import { supabaseClient } from "@supabase/auth-helpers-nextjs";

interface Cart {
  id : string;
  created_at : string;
  quantity : number;
  cart_total : number;
  profile_id : {
    id: string;
    created_at: string;
    email: string;
    first_name: string;
    last_name: string;
  }
}

export async function getCart(id:string)  {

  let { data: shopping_cart, error } = await supabaseClient
  .from('shopping_cart')
  .select('*, profile_id(*)').single()

  if(error) {
    throw new Error(error.message)
  }

  return shopping_cart as Cart

}
