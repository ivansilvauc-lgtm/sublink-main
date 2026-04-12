import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Block all /blog routes — redirect to home
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: ['/blog', '/blog/:path*'],
};
