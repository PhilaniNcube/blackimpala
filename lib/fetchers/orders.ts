"server only"

import { createClient } from "@/utils/supabase/server";

// create a function that fetches an order by id
export async function fetchOrderById(id:string) {

  const supabase = createClient();

  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("id", id)
    .single();


  return { data, error };
}
