import { NextResponse } from "next/server";

const stripe = require("stripe")(
  "sk_test_51Qj9MpChMScoUAyjxIjR0HUwPiPn90Ut6gcdMPERlhWpnzRIsZAWYokcBFjLELHxHhh1NxYKYkoLM51f5f4jrdV900jfNP5rNg"
);

export async function POST(req) {
  try {
    const data = await req.json();
    console.log(data);

    // TODO: add to db
    // TODO: send email

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      {
        redirected: true,
        url: new URL("/", req.url),
      },
      { status: 303 }
    );
  }
}

export async function OPTIONS() {
  const res = NextResponse.json(null, { status: 204 });
  // Set CORS headers for preflight requests
  res.headers.set("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  return res;
}
