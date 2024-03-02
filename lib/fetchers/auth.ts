import { createClient } from "@/utils/supabase/server";

export async function getUser() {
  const supabase = createClient();

  try {
    const {data: {user}, error} = await  supabase.auth.getUser();
  if (error) {
    throw new Error(error.message);
  }

  return user;
  } catch (error) {
   console.error(error);
   return null;
  }




}


export async function is_admin() {
  const supabase = createClient();

  try {
    const {data, error} = await supabase.rpc('is_admin');

     if (error) {
    return false;
  }

  return data;
  } catch (error) {

    return false;

  }


}
