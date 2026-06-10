import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
    const token = req.cookies.get('token')?.value;

    if (!token) {
        return NextResponse.redirect(new URL('/login', req.url));
    }
    // check token expiration in layout
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!.*\\..*|_next|login).*)', '/', '/(api|trpc)(.*)'],
};
