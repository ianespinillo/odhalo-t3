import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { locales, pathnames } from './utils/locales';
import type { NextFetchEvent, NextRequest } from "next/server";

const publicPages = [
  "/:lang/",
  "/:lang/capitulos",
  "/:lang/capitulos/:number",
  "/:lang/quien-es-odalho",
  "/:lang/contacto",
  "/:lang/propuesta",
  "/:lang/proposito",
  "/:lang/donaciones",
  "/:lang/doncaciones/mp",
];
// This function can be marked `async` if using `await` inside
const authHandler = withAuth(
  async function middleware(req) {
    console.log(req);

    if (!req.nextauth.token && req.nextUrl.pathname.includes('admin')) {
      throw new Error("Not logged in");
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: "/admin/login",
    },
  },
);
const i18Handler = createMiddleware({
  // A list of all locales that are supported
  locales: locales,
  // Used when no locale matches
  defaultLocale: "es",
  pathnames: pathnames
  
});
export async function middleware(request: NextRequest) {
  const isPublicPage = !request.nextUrl.pathname.includes("admin");
  console.log(isPublicPage);
  if (isPublicPage) {
    return i18Handler(request);
  } else {
    return (authHandler as any)(request);
  }
}

// See "Matching Paths" below to learn more

export const config = {
  matcher: [
		// Enable a redirect to a matching locale at the root
		'/',

		// Set a cookie to remember the previous locale for
		// all requests that have a locale prefix
		'/(es|en|fr)/:path*',

		// Enable redirects that add missing locales
		// (e.g. `/pathnames` -> `/en/pathnames`)
		'/((?!_next|_vercel|.*\\..*).*)',
	],  
};
