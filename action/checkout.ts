"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";


export async function checkoutAction(formData:FormData) {

  const supabase = createClient();

  const {data:{user}} = await  supabase.auth.getUser();

  if (!user) {
			redirect("/login");
		}

  const values = Object.fromEntries(formData.entries());

  const phone_number = values.phone_number as string;
  const address = values.address as string;
  const order_total = values.order_total as string;

  try {
    const { data, error } = await supabase
      .from("orders")
      .insert([{
         profile_id: user.id,
         phone_number: phone_number,
         order_amount: Number(order_total),
         street_address: address,
      }]).select("*").single();

    if (error || data === null) {
      console.error(error);

    }

  } catch (err) {

    console.error(err);

  }  finally {
    console.log("done");
    redirect("/order")
  }

}
