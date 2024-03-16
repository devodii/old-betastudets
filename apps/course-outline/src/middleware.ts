import { NextRequest } from 'next/server';
import { updateSession } from './middlewares/session-middleware';

export async function middleware(req: NextRequest) {
  console.log('middleware ran');
  await updateSession(req);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};