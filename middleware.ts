import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("next-auth.session-token"); // token ถุกเก็บใน cookies browser

    if (!token) {
        return NextResponse.redirect(new URL("/signin", req.url));
    }

    return NextResponse.next();
}

// Apply middleware only to specific routes
export const config = {
    matcher: ['/browse']
};
