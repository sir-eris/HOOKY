// middleware.js
import { NextResponse } from "next/server";
// import cors, { runMiddleware } from "./lib/CorsMiddleware";

export async function middleware(req) {
  // Create a response object to pass to the CORS middleware
  const res = NextResponse.next(); // This acts like the response object

  // Run the CORS middleware for every request
  //   await runMiddleware(req, res, cors);

  // Apply CORS headers to all responses
  res.headers.set("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  // Handle preflight requests (OPTIONS)
  if (req.method === "OPTIONS") {
    res.headers.set("Access-Control-Max-Age", "86400"); // Cache preflight request for 24 hours
    return res;
  }

  return res;
}

// Apply middleware only to API routes
export const config = {
  matcher: "/api/:path*",
};