import { supabaseClient } from "@supabase/auth-helpers-nextjs"
import { Product } from "../types"

const getProducts = async () => {

  let { data: products, error } = await supabaseClient
  .from('products')
  .select('*, category(*)').order('name')

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


export const getCiders = async () => {
  let { data: products, error } = await supabaseClient.from('products').select('*, category(*)').eq('category', 'd0e5ce6f-1a32-461f-bd65-79b8b62e3603')

      if (error) {
    throw new Error(error.message)
  }
  return products as Product[]

}

export const getGins = async () => {
  let { data: products, error } = await supabaseClient.from('products').select('*, category(*)').eq('category', 'fb720a35-b04b-4857-bdd6-a00b183215e6')

      if (error) {
    throw new Error(error.message)
  }
  return products as Product[]

}

export const getBrandy = async () => {
  let { data: products, error } = await supabaseClient.from('products').select('*, category(*)').eq('category', '1aa4dbe6-a93d-40a9-b1b8-4252bf7ef1d6')

      if (error) {
    throw new Error(error.message)
  }
  return products as Product[]

}

export const getSalad = async () => {
  let { data: products, error } = await supabaseClient.from('products').select('*, category(*)').eq('category', '47808c4e-f87e-49d7-b1b9-1fccdb2884d9')

      if (error) {
    throw new Error(error.message)
  }
  return products as Product[]

}

export const getStarch = async () => {
  let { data: products, error } = await supabaseClient.from('products').select('*, category(*)').eq('category', 'ce3a8107-c44b-4233-a029-a729dceb4182')

      if (error) {
    throw new Error(error.message)
  }
  return products as Product[]

}

export const getPizza = async () => {
  let { data: products, error } = await supabaseClient.from('products').select('*, category(*)').eq('category', 'f550c828-3e7c-4657-8a01-ad9109dd7e5b')

      if (error) {
    throw new Error(error.message)
  }
  return products as Product[]

}

export const getWine = async () => {
  let { data: products, error } = await supabaseClient.from('products').select('*, category(*)').eq('category', 'e6c3e7ff-f5be-4ab4-9fd3-433e0b6fde60')

      if (error) {
    throw new Error(error.message)
  }
  return products as Product[]

}

export const getChampagne = async () => {
  let { data: products, error } = await supabaseClient.from('products').select('*, category(*)').eq('category', '1e9797fc-39a9-46a8-828f-fe07af36892a')

      if (error) {
    throw new Error(error.message)
  }
  return products as Product[]

}

export const getSeafood = async () => {
  let { data: products, error } = await supabaseClient.from('products').select('*, category(*)').eq('category', '1c71e80c-a43f-4ddc-ba39-ebda6d0c64dd')

      if (error) {
    throw new Error(error.message)
  }
  return products as Product[]

}

export const getPasta = async () => {
  let { data: products, error } = await supabaseClient.from('products').select('*, category(*)').eq('category', '5f1a1910-c56f-4d84-a3ef-f0954ae895cf')

      if (error) {
    throw new Error(error.message)
  }
  return products as Product[]

}

export const getSoftDrinks = async () => {
  let { data: products, error } = await supabaseClient.from('products').select('*, category(*)').eq('category', 'b077b719-e6b5-43f5-a2d1-434f140a9b89')

      if (error) {
    throw new Error(error.message)
  }
  return products as Product[]

}

export const getStews = async () => {
  let { data: products, error } = await supabaseClient.from('products').select('*, category(*)').eq('category', '3acc7f19-719f-4c57-a770-c63b2eee3b10')

      if (error) {
    throw new Error(error.message)
  }
  return products as Product[]

}

export const getLightMeals = async () => {
  let { data: products, error } = await supabaseClient.from('products').select('*, category(*)').eq('category', '32b16b83-6c88-4fc7-8419-e801487ee79d')

      if (error) {
    throw new Error(error.message)
  }
  return products as Product[]

}

export const getBreakfasts = async () => {
  let { data: products, error } = await supabaseClient.from('products').select('*, category(*)').eq('category', 'bc9df876-a8df-48dd-ba6c-bc3dd55ef45c')

      if (error) {
    throw new Error(error.message)
  }
  return products as Product[]

}

export const getProductById = async (id:string) =>  {
    let { data: products, error } = await supabaseClient.from('products').select('*, category(*)').eq('id', id).single()

          if (error) {
    throw new Error(error.message)
  }
  return products as Product
}

export default getProducts


