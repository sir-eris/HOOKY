import { NextResponse } from "next/server";
import { Resend } from "resend";
import ProVerifyTemplate from "../../../../email/pro_verify";

const resend = new Resend("re_BQYvkmwC_ErEeC5zNy8MCgS2RtuByD7Ri");

export async function POST(req) {
  try {
    const data = await req.json();
    const memberID = data.memberID;
    const license = data.license;

    // check DB

    try {
      const { data, error } = await resend.emails.send({
        from: "Hooky <onboarding@resend.dev>",
        to: ["ramtinmir.development+resend@gmail.com"],
        subject: "PRO Registration - Hooky",
        react: ProVerifyTemplate({
          title: "title",
          name: "ERIS",
          business_license: "business_license",
          pro_member_id: "pro_member_id",
          proUrl: "/",
          faqUrl: "/",
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
