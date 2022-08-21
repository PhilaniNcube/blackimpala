import { supabaseClient } from "@supabase/auth-helpers-nextjs"
import { Product } from "../types"

const getProducts = async () => {

  let { data: products, error } = await supabaseClient
  .from('products')
  .select('*, category(*)')

  if (error) {
    throw new Error(error.message)
  }
  return products as Product[]

}

export default getProducts
