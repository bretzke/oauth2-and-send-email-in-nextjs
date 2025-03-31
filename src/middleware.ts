import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const LOGIN_OR_SIGN_UP_ROUTES = ["/login", "/sign-up"];

export async function middleware(request: NextRequest) {
	const token = await getToken({ req: request });
	console.log(token);

	const { pathname } = request.nextUrl;

	if (token && LOGIN_OR_SIGN_UP_ROUTES.includes(pathname)) {
		return NextResponse.redirect(new URL("/app", request.url));
	}

	if (!token && pathname.startsWith("/app")) {
		return NextResponse.redirect(new URL("/login", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/app/:path*", "/login", "/sign-up"],
};
