import { createClient } from "@/utils/supabase/server";

export async function getCategories() {
  const supabase = createClient()


  // write a trycatch block to gracefully handle errors
  try {
    const { data, error } = await supabase.from('categories').select('*').order('name', { ascending: true })
    if(error) {
      return {
        error: error.message,
        categories: null
      }
    }

    return {
      error: null,
      categories: data
    }
  } catch (error) {
     return {
      error: 'An error occurred while fetching categories',
      categories: null
     }
  }

}
