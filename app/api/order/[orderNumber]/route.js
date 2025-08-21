import { NextResponse } from "next/server";

const stripe = require("stripe")(
  "sk_test_51Qj9MpChMScoUAyjxIjR0HUwPiPn90Ut6gcdMPERlhWpnzRIsZAWYokcBFjLELHxHhh1NxYKYkoLM51f5f4jrdV900jfNP5rNg"
);

export async function GET(req, {params}) {
  try {
    if (params["orderNumber"].length < 1) {
      return NextResponse.json(
        {
          redirected: true,
          url: new URL("/order/status", req.url),
        },
        { status: 200 }
      );
    }
    const chargeId = "ch_" + params["orderNumber"];
    try {
      const charge = await stripe.charges.retrieve(chargeId);
      const paymentMethod = await stripe.paymentMethods.retrieve(
        charge.payment_method
      );
      return NextResponse.json({ charge, paymentMethod }, { status: 200 });
    } catch (err) {
      return NextResponse.json(
        {
          redirected: true,
          url: new URL("/order/status", req.url),
        },
        { status: 200 }
      );
    }
  } catch (err) {
    return NextResponse.json(
      {
        redirected: true,
        url: new URL("/order/status", req.url),
      },
      { status: 200 }
    );
  } finally {
    // TODO:
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
