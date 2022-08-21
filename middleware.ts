// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getUser, supabaseClient } from '@supabase/auth-helpers-nextjs';



// Trigger this middleware to run on the `/secret-page` route
export const config = {
  matcher: ['/admin:path', '/admin/products:path', '/admin/products/add:path']
};

export async function middleware(req: NextRequest) {

  const JWT = req.cookies.get('sb-access-token') || ''

  if (JWT) {

    const {user, error} = await supabaseClient.auth.api.getUser(JWT)


  if (user?.role === 'supabase_admin') {
    req.nextUrl.pathname = '/admin';
  } else {
    req.nextUrl.pathname = `/unauthorized`;
  }
// Rewrite to URL
  return NextResponse.rewrite(req.nextUrl);
  }
}
