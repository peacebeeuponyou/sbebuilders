import { NextResponse } from "next/server";

export async function GET() {
  // Return an empty session object to indicate no active NextAuth session
  // This prevents the "Unexpected token '<'" error when something tries to fetch this route
  return NextResponse.json({});
}
