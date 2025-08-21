import { NextResponse } from "next/server";

const stripe = require("stripe")(
  "sk_test_51Qj9MpChMScoUAyjxIjR0HUwPiPn90Ut6gcdMPERlhWpnzRIsZAWYokcBFjLELHxHhh1NxYKYkoLM51f5f4jrdV900jfNP5rNg"
);

export async function POST(req) {
  try {
    const data = await req.json();
    const customers = await stripe.customers.search({
      query: `email:'${data.email}'`,
      // limit: 1,
    });

    if (customers.data.length > 0) {
        const customerId = customers.data[0].id;
        const charges = await stripe.charges.list({
        customer: customerId,
        limit: 15,
        });
        const filteredCharges = charges.data.filter(
          (intent) =>
            intent.metadata && intent.metadata["order_id"] === data.order_id
        );

        if (filteredCharges.length > 0) {
          return NextResponse.json(
            {
              redirected: true,
              url: new URL(
                `/order/${filteredCharges[0].id.substring(3)}`,
                req.url
              ),
            },
            { status: 200 }
          );
        }
        return NextResponse.json({ error: "no order" }, { status: 200 });
    }
    return NextResponse.json({ error: "no user" }, { status: 200 });
  } catch (err) {
    console.log(err)
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
