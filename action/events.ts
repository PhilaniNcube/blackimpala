"use server"

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import slugify from "slugify";
import { z } from "zod";

type PrevState = {
  message: string;
  event_slug: string;
}

const formSchema = z.object({
  date: z.string(),
  title: z.string(),
  description: z.string(),
  location: z.string(),
  time: z.string(),
  price: z.string(),
})

export async function createEvent(prevState:PrevState, formData:FormData) {
  const supabase = createClient()



  const validatedFields = formSchema.safeParse({
    date: formData.get("date") as string,
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    location: formData.get("location") as string,
    time: formData.get("time") as string,
    price: formData.get("price") as string,
  })


  if (!validatedFields.success) {
    console.log(validatedFields.error.errors)
    return {
      message: "Invalid form fields",
      event_slug: "",
    }
  }

  const slug = slugify(validatedFields.data.title, {lower: true, strict: true})

  const { data, error } = await supabase.from("events").insert({
    slug,
    date: validatedFields.data.date,
    title: validatedFields.data.title,
    description: validatedFields.data.description,
    location: validatedFields.data.location,
    time: validatedFields.data.time,
    price: Number(validatedFields.data.price),
  }).select("*").single()

  if(error?.code === "23505") {
    return {
      message: `Error creating event: The title ${validatedFields.data.title} already exists. Please choose a different title.`,
      event_slug: "",
    }
  }
  if (error) {
    return {
      message: `Error creating event: ${error.message}`,
      event_slug: "",
    }
  }

  return {
    message: "Event created successfully",
    event_slug: data?.slug,
  }


}
