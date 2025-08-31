import "server-only";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import OrderPlacedTemplate from "../../../../email_templates/order_placed";

const resend = new Resend("re_BQYvkmwC_ErEeC5zNy8MCgS2RtuByD7Ri");
const stripe = require("stripe")(
  "sk_test_51Qj9MpChMScoUAyjxIjR0HUwPiPn90Ut6gcdMPERlhWpnzRIsZAWYokcBFjLELHxHhh1NxYKYkoLM51f5f4jrdV900jfNP5rNg",
  {
    apiVersion: "2025-02-24.acacia; custom_checkout_beta=v1;",
  }
);

// TODO: refactor Stripe product search and data structure 
export async function POST(req) {
  const data = await req.json();
  const orderId = Math.random().toString(36).substring(2, 9).toUpperCase();

  // add to DB

  let items = [];
  for (const [key, value] of Object.entries(data)) {
    if (!value.reserve) {
      const products = await stripe.products.search({
        query: `name:'${value.title}'`,
      });
      if (products.data.length == 1) {
        items.push({
          price: products.data[0].default_price,
          quantity: value.count,
        });
      } else {
        // TODO handle when product doesn't exist in Stripe database
        console.log("NO PRODUCTS IN STRIPE");
      }
      // Stripe checkout counts product option as product
      for (const [k, v] of Object.entries(value.checkOutOptions)) {
        const prices = await stripe.prices.search({
          query: `metadata['item_title']:'${value.title}' AND metadata['option_title']:'${v.title}'`,
        });
        if (prices.data.length == 1) {
          items.push({ price: prices.data[0].id, quantity: value.count });
        } else {
          // error
        }
      }
    }
  }
  try {
    const session = await stripe.checkout.sessions.create({
      customer_creation: "always",
      phone_number_collection: {
        enabled: true,
      },
      payment_intent_data: {
        metadata: {
          order_id: orderId,
          status: "Order Placed",
          shipping_status: "",
          return_status: "",
          is_pre_order: true,
          canceled: false,
          has_gift: false,
        },
      },
      metadata: {
        order_id: orderId,
        status: "Order Placed",
        shipping_status: null,
        return_status: null,
        is_pre_order: true,
        canceled: false,
        // gifts: [],
      },
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      // consent_collection: {
      //   promotions: "auto",
      //   terms_of_service: "required",
      // },
      line_items: items,
      mode: "payment",
      ui_mode: "custom",
      allow_promotion_codes: true,
      automatic_tax: { enabled: true },
      billing_address_collection: "required",
      return_url: "http://localhost:3000/order/checkout",
    });

    // update payment status

    try {
      const { data, error } = await resend.emails.send({
        from: "Hooky Store <onboarding@resend.dev>",
        to: ["ramtinmir.development+resend@gmail.com"],
        subject: "Order Placed",
        react: OrderPlacedTemplate({
          title: "Order Notification- HOOKY",
          name: "name",
          orderId: "123456",
          orderDate: "Tuesday, Apr 24",
          items: items,
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

    return NextResponse.json(session, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Error" }, { status: 200 });
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
