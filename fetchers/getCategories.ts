import { supabaseClient } from "@supabase/auth-helpers-nextjs"

const getCategories = async () => {

  let { data: categories, error } = await supabaseClient
  .from('categories')
  .select('*')

  if (error) {
    throw new Error(error.message)
  }
  return categories

}

export default getCategories
