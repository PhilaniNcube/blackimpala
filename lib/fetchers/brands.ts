import { createClient } from "@/utils/supabase/server";

export async function getBrands() {
  const supabase = createClient();
  const { data, error } = await supabase.from('brands').select('*').order('name', { ascending: true });
  return {
    brands: data,
    error: error === null ? null : error.message
  };
}
