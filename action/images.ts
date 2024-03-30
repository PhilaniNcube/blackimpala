"use server"

import { revalidate } from "@/app/(home)/home-weekly-events";
import cloudinary from "@/lib/cloudinary";
import { createClient } from "@/utils/supabase/server";
import type { UploadApiResponse } from "cloudinary";
import { revalidatePath } from "next/cache";




export async function uploadEventImage(formData: FormData) {

  const supabase = createClient()


  const slug = formData.get("slug") as string;
  const image = formData.get("image") as File;
  const arrayBuffer = await image.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  const data = await new Promise<UploadApiResponse|undefined>((resolve, reject) => {
    cloudinary.uploader.upload_stream({
      folder: "events",
    }, (error, result) => {
      if(error) {
        reject(error);
        return;
      }

      resolve(result);
    }).end(buffer);
  });



  if(data) {
     const {data: event, error} = await supabase.from("events").update({image_url: data.url}).eq("slug", slug).select("*");

      if(error) {
        console.error(error.message);
        return;
      }
      revalidatePath("/events");
  }

  revalidatePath(`dashboard/events/${slug}`);

}

