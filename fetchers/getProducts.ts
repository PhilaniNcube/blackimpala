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


export let getPlatters = async () => {
  let { data: products, error } = await supabaseClient.from('products').select('*, category(*)').eq('category', 'e8d84700-8270-403c-967c-3f8f06f7318e')

    if (error) {
    throw new Error(error.message)
  }
  return products as Product[]
}


export let getBeers = async () => {
  let { data: products, error } = await supabaseClient.from('products').select('*, category(*)').eq('category', 'fef1e1e3-586f-4e52-a87d-fa6fbf60c69d')

    if (error) {
    throw new Error(error.message)
  }
  return products as Product[]
}


export default getProducts


