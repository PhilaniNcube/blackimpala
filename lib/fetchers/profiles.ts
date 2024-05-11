"server only"

import { createClient } from "@/utils/supabase/server";

// create a function that a profile by id

export async function fetchProfileById(id:string) {

  const supabase = createClient();

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single();

   if (error || !data) {
    return null
   }

  return data;
}
