"use server"


import { z } from "zod"
import slugify from "slugify"
import { createClient } from "@/utils/supabase/server"
import { Database } from "@/schema"

type PrevState = {
  errors?: {
    name: string[],
    price: string[],
    description: string[],
    stock: string[],
    category_id: string[],
    brand_id: string[],
  },
  message: string,
}

const createProductFormSchema = z.object({
  name: z.string().min(3).trim(),
  price: z.string(),
  description: z.string().min(3).trim(),
  stock: z.string(),
  category_id: z.string(),
  brand_id: z.string().optional(),
})

export async function createProduct(prevState:PrevState, formData:FormData) {



  const validationResult = createProductFormSchema.safeParse({
    name: formData.get("name") as string,
    price: formData.get("price") as string,
    description: formData.get("description") as string,
    stock: formData.get("stock") as string,
    category_id: formData.get("category_id") as string,
    brand_id: formData.get("brand_id") as string,
  })

  if (!validationResult.success) {

    console.log(validationResult.error.flatten().fieldErrors)

    return {
      errors: validationResult.error.flatten().fieldErrors,
      message: "Invalid form submission",
  }
}

const slug = slugify(validationResult.data.name, { lower: true })


   const supabase = createClient()

   try {

const { data, error } = await supabase
  .from('products')
  .insert([
    {
      name: validationResult.data.name,
      price: Number(validationResult.data.price),
      description: validationResult.data.description,
      stock: Number(validationResult.data.stock),
      category_id: Number(validationResult.data.category_id),
      brand_id: Number(validationResult.data.brand_id),
      slug,
     },
  ])
  .select()

  if(error) {
    return {
      errors: {
        name: [""],
        price: [""],
        description: [""],
        stock: [""],
        category_id: [""],
        brand_id: [""],
      },
      message: "There was an error creating the product",
    }
  }

  return {
    errors: {
      name: [""],
      price: [""],
      description: [""],
      stock: [""],
      category_id: [""],
      brand_id: [""],
    },
    message: "Product created successfully",
  }



   } catch (error) {

      return {
        errors: {
          name: [""],
          price: [""],
          description: [""],
          stock: [""],
          category_id: [""],
          brand_id: [""],
        },
        message: "There was an error creating the product",
      }

   }


}
