import { createClient } from "@/utils/supabase/client";

export async function getProductById(id: number) {
  const supabase = createClient();

  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      return {
        product: null,
        error: error.message,
      };
    }

    return {
      product: data,
      error: null,
    };
  } catch (error) {
    return {
      product: null,
      error: "An error occurred while fetching products",
    };
  }
}
