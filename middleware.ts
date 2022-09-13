// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getUser, supabaseClient } from '@supabase/auth-helpers-nextjs';



// Trigger this middleware to run on the `/secret-page` route
export const config = {
  matcher:  ['/admin', '/admin/:path', '/admin/:path*']
};

export async function middleware(req: NextRequest) {



  const JWT = req.cookies.get('sb-access-token') || 'Nothing'


  if (JWT) {

    const {user, error} = await supabaseClient.auth.api.getUser(JWT)




  if (user?.role === 'supabase_admin') {
    req.nextUrl.pathname = '/admin';
  } else if (user === null || user.role !== 'supabase_admin' ) {
    req.nextUrl.pathname = `/`;
  }
// Rewrite to URL
  return NextResponse.rewrite(req.nextUrl);
  }
}
