import {z} from 'zod';

const envVariables = z.object({
	NEXT_PUBLIC_SUPABASE_URL: z.string(),
	NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
	PROJECT_ID: z.string(),
	DATABASE_URL: z.string(),
	VERCEL_URL: z.string(),
	NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET: z.string(),
	NEXT_PUBLIC_CLOUDINARY_KEY: z.string(),
	NEXT_PUBLIC_CLOUDINARY_SECRET: z.string(),
	NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: z.string(),
	RESEND_API_KEY: z.string(),
	SUPABASE_SERVICE_ROLE: z.string(),
});

envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> { }
  }
}
