// src/middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();
  
  // Map status codes to error components
  if (response.status === 400) {
    return NextResponse.rewrite(new URL('/400', request.url));
  }
  if (response.status === 401) {
    return NextResponse.rewrite(new URL('/401', request.url));
  }
  if (response.status === 403) {
    return NextResponse.rewrite(new URL('/403', request.url));
  }
  if (response.status === 503) {
    return NextResponse.rewrite(new URL('/503', request.url));
  }

  return response;
}

export const config = {
  matcher: '/:path*'
};