import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect('/carrinho');
  }
}
