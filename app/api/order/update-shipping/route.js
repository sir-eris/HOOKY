import { NextResponse } from "next/server";
import { Resend } from "resend";
import OrderShippingAddressUpdatedTemplate from "../../../../email_templates/order_shipping_address_updated";

const resend = new Resend("re_BQYvkmwC_ErEeC5zNy8MCgS2RtuByD7Ri");

const stripe = require("stripe")(
  "sk_test_51Qj9MpChMScoUAyjxIjR0HUwPiPn90Ut6gcdMPERlhWpnzRIsZAWYokcBFjLELHxHhh1NxYKYkoLM51f5f4jrdV900jfNP5rNg"
);

export async function POST(req) {
  try {
    const data = await req.json();
    const chargeId = "ch_" + data.orderNumber;

    const customers = await stripe.customers.list({
      email: data.email,
      limit: 15,
    });
    if (customers.data.length > 0) {
      const charge = await stripe.charges.retrieve(chargeId);
      for (let i = 0; i < customers.data.length; i++) {
        if (charge.customer === customers.data[i].id) {
          return NextResponse.json({ ok: true }, { status: 200 });
        }
      }
    }
    return NextResponse.json({ ok: false }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}
export async function PUT(req) {
  try {
    const data = await req.json();
    const chargeId = "ch_" + data.orderNumber;
    const email = data.email;

    const charge = await stripe.charges.retrieve(chargeId);
    const customer = await stripe.customers.retrieve(charge.customer);
    const chargeUpdate = await stripe.charges.update(chargeId, {
      shipping: {
        address: { ...data.address },
        name: customer.name,
      },
    });


    try {
      const { data, error } = await resend.emails.send({
        from: "Hooky Store <onboarding@resend.dev>",
        to: ["ramtinmir.development+resend@gmail.com"],
        subject: "Order Details Changed",
        react: OrderShippingAddressUpdatedTemplate({
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
        // update db
      }
      // update db
    } catch (err) {
      // update db
    }

    return NextResponse.json(
      {
        redirected: true,
        url: new URL(`/order/${data.orderNumber}`, req.url),
      },
      { status: 303 }
    );
  } catch (err) {
    return NextResponse.json({ ok: false }, { status: 200 });
  }
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
