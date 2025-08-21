import { NextResponse } from "next/server";
import { Resend } from "resend";
import OrderCanceledTemplate from "../../../../email/order_canceled";

const resend = new Resend("re_BQYvkmwC_ErEeC5zNy8MCgS2RtuByD7Ri");

const stripe = require("stripe")(
  "sk_test_51Qj9MpChMScoUAyjxIjR0HUwPiPn90Ut6gcdMPERlhWpnzRIsZAWYokcBFjLELHxHhh1NxYKYkoLM51f5f4jrdV900jfNP5rNg"
);

export async function POST(req) {
  try {
    const data = await req.json();
    const chargeId = "ch_" + data.orderNumber;
    if (!chargeId) {
      return NextResponse.json(
        {
          redirected: true,
          url: new URL(`/order/${data.orderNumber}`, req.url),
        },
        { status: 200 }
      );
    }
    try {
        const customers = await stripe.customers.list({
          email: data.email,
          limit: 1,
        });
        if (customers.data.length > 0) {
          try {
            const charge = await stripe.charges.retrieve(chargeId);
            const updateCharge = await stripe.charges.update(chargeId, {
              metadata: {
                ...charge.metadata,
                canceled: true,
                status: "Order Canceled",
              },
            });
            const refund = await stripe.refunds.create({
              charge: chargeId,
            });
            
            try {
              const { data, error } = await resend.emails.send({
                from: "Hooky Store <onboarding@resend.dev>",
                to: ["ramtinmir.development+resend@gmail.com"],
                subject: "Order Canceled",
                react: OrderCanceledTemplate({
                  title: "Order Notification- HOOKY",
                  name: "ERIS",
                  orderId: "98765",
                  orderPlaced: "Tuesday, Apr 24",
                  OrderStatusURL: "/",
                  PaymentURL: "/",
                  SupportURL: "https://localhost:3000/contact",
                  logoURL: "/",
                }),
              });
              if (error) {
                console.log(error);
              }
              console.log(data);
            } catch (err) {
              console.log(err);
            }

            return NextResponse.json(
              {
                redirected: true,
                url: new URL(`/order/${data.orderNumber}`, req.url),
              },
              { status: 200 }
            );
          } catch (err) {
            return NextResponse.json({ ok: false }, { status: 200 });
          }
        }
        return NextResponse.json({ ok: false }, { status: 200 });
    } catch (err) {
      return NextResponse.json({ ok: false }, { status: 200 });
    }
  } catch (err) {
    return NextResponse.json(
      {
        redirected: true,
        url: new URL("/", req.url),
      },
      { status: 200 }
    );
  } finally {}
}

export async function OPTIONS() {
  const res = NextResponse.json(null, { status: 204 });
  // Set CORS headers for preflight requests
  res.headers.set("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.headers.set("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  return res;
}
