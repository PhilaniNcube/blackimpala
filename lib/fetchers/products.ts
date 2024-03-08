import { createClient } from "@/utils/supabase/server";

export async function getProducts(page=1, limit=20) {
  const supabase = createClient();

  // calculate the start and end limits for pagination
  const start = (page - 1) * limit;
  const end = start + limit;



  try {

    const {
    data,
    error,
    count
  } = await supabase.from('products').select('*',  { count: 'exact', head: false }).order('name', {
    ascending: true
  }).range(start, end);



  if (error) {
    return {
      products: null,
      count: 0,
      error: error.message
    };
  }

  return {
    products: data,
    count: count || 0,
    error: null
  }

  } catch (error) {



    return {
      products: null,
      count:0,
      error: "An error occurred while fetching products"
    };

  }

}


export async function getActiveProducts(page=1, limit=20) {
  const supabase = createClient();

  // calculate the start and end limits for pagination
  const start = (page - 1) * limit;
  const end = start + limit;



  try {

    const {
    data,
    error,
    count
  } = await supabase.from('products').select('*',  { count: 'exact', head: false }).order('name', {
    ascending: true
  }).eq('status', 'active').range(start, end);



  if (error) {
    return {
      products: null,
      count: 0,
      error: error.message
    };
  }

  return {
    products: data,
    count: count || 0,
    error: null
  }

  } catch (error) {



    return {
      products: null,
      count:0,
      error: "An error occurred while fetching products"
    };

  }

}


export async function getActiveProductsByCategory(category_id:number, page=1, limit=20 ) {
  const supabase = createClient();

  // calculate the start and end limits for pagination
  const start = (page - 1) * limit;
  const end = start + limit;



  try {

    const {
    data,
    error,
    count
  } = await supabase.from('products').select('*',  { count: 'exact', head: false }).order('name', {
    ascending: true
  }).eq('status', 'active').eq('category_id', category_id).range(start, end);



  if (error) {
    return {
      products: null,
      count: 0,
      error: error.message
    };
  }

  return {
    products: data,
    count: count || 0,
    error: null
  }

  } catch (error) {



    return {
      products: null,
      count:0,
      error: "An error occurred while fetching products"
    };

  }

}


export async function getProductById(id:number) {

    const supabase = createClient();

  try {

    const {
    data,
    error
  } = await supabase.from('products').select('*').eq('id', id).single();

  if (error) {
    return {
      product: null,
      error: error.message
    };
  }

  return {
    product: data,
    error: null
  }

  } catch (error) {

    return {
      product: null,
      error: "An error occurred while fetching products"
    };

  }

}


export async function getProductBySlug(slug:string) {

    const supabase = createClient();

  try {

    const {
    data,
    error
  } = await supabase.from('products').select('*').eq('slug', slug).single();

  if (error) {
    return {
      product: null,
      error: error.message
    };
  }

  return {
    product: data,
    error: null
  }

  } catch (error) {

    return {
      product: null,
      error: "An error occurred while fetching products"
    };

  }

}

export async function getProductByCategoryId(category_id:number) {

    const supabase = createClient();

  try {

    const {
    data,
    error
  } = await supabase.from('products').select('*').eq('category_id', category_id).single();

  if (error) {
    return {
      product: null,
      error: error.message
    };
  }

  return {
    product: data,
    error: null
  }

  } catch (error) {

    return {
      product: null,
      error: "An error occurred while fetching products"
    };

  }

}

export async function getProductByBrandId(brand_id:number) {

    const supabase = createClient();

  try {

    const {
    data,
    error
  } = await supabase.from('products').select('*').eq('brand_id', brand_id).single();

  if (error) {
    return {
      product: null,
      error: error.message
    };
  }

  return {
    product: data,
    error: null
  }

  } catch (error) {

    return {
      product: null,
      error: "An error occurred while fetching products"
    };

  }

}
