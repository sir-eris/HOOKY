import { NextResponse } from "next/server";
import { Resend } from "resend";
import ProRegisterTemplate from "../../../../email_templates/pro_register";

const resend = new Resend("re_BQYvkmwC_ErEeC5zNy8MCgS2RtuByD7Ri");

export async function POST(req) {
  try {
    const form_data = await req.json();
    let db_id;

    // add to DB
    try {
      // already exists
      // if () return NextResponse.json({ error: true, message: "You seem to have already tried to register. We will look into your submission and expedite the process if necessary." }, { status: 200 });

    } catch (err) {
      return NextResponse.json(
        { error: true, message: "There seems to have been an error in processing your form. Please try submitting again." },
        { status: 200 },
      );
    }

    // initiate email
    try {
      const { data, error } = await resend.emails.send({
        from: "Hooky Store <onboarding@resend.dev>",
        to: ["ramtinmir.development+resend@gmail.com"],
        subject: "PRO Registration",
        react: ProRegisterTemplate({
          title: "PRO Registration - HOOKY",
          business_name: form_data.business_name,
          license_number: form_data.business_license_number,
          billing_address: form_data.billing_address_1,
          first_name: form_data.first_name,
          last_name: form_data.last_name,
          email: form_data.email,
          phone: form_data.phone,
          mailing_address: form_data.mailing_address_1,
          proUrl: "https://localhost:3000/pro",
          accessoriesUrl: "https://localhost:3000/accessories",
          faqUrl: "/]https://localhost:3000/faq",
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
