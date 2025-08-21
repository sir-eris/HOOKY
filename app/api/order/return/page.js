import AWS from "aws-sdk";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

const dynamoDB = new AWS.DynamoDB.DocumentClient();

const stripe = require("stripe")(
  "sk_test_51Qj9MpChMScoUAyjxIjR0HUwPiPn90Ut6gcdMPERlhWpnzRIsZAWYokcBFjLELHxHhh1NxYKYkoLM51f5f4jrdV900jfNP5rNg"
);

export async function POST(req) {
  try {
    // const session = await stripe.checkout.sessions.retrieve(
    //   "cs_test_b19OnSry0qXv9QDTKmrZT2b35SvwCMXXoPbALv6yYXSWpcXLCFNZzQCyXY"
    // );

    // const res = NextResponse.next();
    // await initMiddleware(req, res, cors);

    const session = await stripe.checkout.sessions.create({
      customer_creation: "always",
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      phone_number_collection: {
        enabled: true,
      },
      line_items: [
        {
          price: "price_1QjTLYChMScoUAyj4rpAbBvf",
          quantity: 1,
        },
        {
          price: "price_1QjWfFChMScoUAyjs6eWWwe1",
          quantity: 1,
        },
      ],
      allow_promotion_codes: true,
      automatic_tax: { enabled: true },
      mode: "payment",
      success_url: "http://localhost:3000/order/thank-you",
      cancel_url: "http://localhost:3000/order?failed=true",
      consent_collection: {
        promotions: "auto",
        terms_of_service: "required",
      },
    });

    // const params = {
    //   TableName: 'customers',
    //   Item: {
    //     customer_id,  // Partition key
    //     name,
    //     email,
    //     phone,
    //     created_at: new Date().toISOString(),  // Add current timestamp
    //   },
    // };
    // await dynamoDB.put(params).promise();

    // const res = NextResponse.redirect(new URL(session.url, req.url));
    return NextResponse.json(session, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Error", error: await err },
      { status: 500 }
    );
  }
}

// OPTIONS handler for preflight requests
// export async function OPTIONS(req) {
//   const res = new Response(null, { status: 204 });
//   await initMiddleware(req, res, cors);
//   return res;
// }

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
