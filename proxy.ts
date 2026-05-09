import { NextResponse, type NextRequest } from "next/server";
import { isLocale } from "@/lib/i18n";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];
  const url = request.nextUrl.clone();

  if (isLocale(firstSegment)) {
    return NextResponse.next();
  }

  if (firstSegment === "en") {
    url.pathname = pathname.replace(/^\/en(?=\/|$)/, "/tr");
    return NextResponse.redirect(url);
  }

  url.pathname = "/tr";

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"]
};
