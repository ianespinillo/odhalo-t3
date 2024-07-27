import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { locales, pathnames } from './utils/locales';
import type { NextFetchEvent, NextRequest } from "next/server";

const publicPages = [
  "/",
  "/capitulos",
  "/capitulos/:number",
  "/quien-es-odalho",
  "/contacto",
  "/propuesta",
  "/proposito",
  "/donaciones",
  "/doncaciones/mp",
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
export default function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join('|')}))?(${publicPages
      .flatMap((p) => (p === '/' ? ['', '/'] : p))
      .join('|')})/?$`,
    'i'
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    return i18Handler(req);
  } else {
    return (authHandler as any)(req);
  }
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
