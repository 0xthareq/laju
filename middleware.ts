import { NextRequest, NextResponse } from "next/server";

// Set MAINTENANCE_MODE=true di Environment Variables Vercel untuk
// mengaktifkan mode maintenance, lalu redeploy (atau "Redeploy" tanpa
// perubahan kode) supaya env var baru terbaca. Set balik ke "false"
// (atau hapus) untuk mematikan mode maintenance.
const MAINTENANCE_MODE = process.env.MAINTENANCE_MODE === "true";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isMaintenancePage = pathname.startsWith("/maintenance");
  const isInternal =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname.startsWith("/untan-logo.png");

  if (MAINTENANCE_MODE && !isMaintenancePage && !isInternal) {
    return NextResponse.redirect(new URL("/maintenance", req.url));
  }

  return NextResponse.next();
}

// Middleware jalan di semua route kecuali file statis di /public
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
