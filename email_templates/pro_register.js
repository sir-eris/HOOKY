import React from "react";

const ProRegistrationEmail = ({
  title,
  business_name,
  license_number,
  billing_address,
  first_name,
  last_name,
  email,
  phone,
  mailing_address,
  supportUrl,
  proUrl,
  accessoriesUrl,
  faqUrl,
  logoUrl,
}) => {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{title}</title>
        <style></style>
      </head>
      <body
        style={{
          fontFamily: "Montserrat, sans-serif",
          margin: 0,
          padding: 0,
          backgroundColor: "#ffffff",
          color: "#4f4f4f",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            padding: "50px 25px",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            textAlign: "center",
            letterSpacing: "0.5pt",
          }}
        >
          <div style={{ textAlign: "center", margin: "0 auto 30px" }}>
            <img src={logoUrl} alt="Your Order" style={{ maxWidth: "100%", height: "auto" }} />
          </div>

          <p
            style={{
              fontWeight: 300,
              textTransform: "uppercase",
              margin: "0 0 15px",
              fontSize: "20px",
            }}
          >
            PRO Member Registration
          </p>
          <hr
            style={{
              borderColor: "#eeeeee",
              borderWidth: "0.5pt",
              width: "100%",
              margin: "0 0 30px",
            }}
          />
          <p style={{ fontSize: "16px", margin: "0 0 10px" }}>Hi {first_name},</p>
          <p
            style={{
              fontSize: "15px",
              margin: "0 0 50px",
              lineHeight: "24px",
            }}
          >
            Thank you for registering your business with Hooky. We'll review your information and contact you regrading your PRO Member ID and help you get started. In the
            meantime, feel free to explore{" "}
            <a href={proUrl} style={{ color: "#000000" }}>
              PRO
            </a>{" "}
            and other{" "}
            <a href={accessoriesUrl} style={{ color: "#000000" }}>
              Accessories
            </a>
            .
          </p>

          <div style={{ marginBottom: "50px" }}>
            <p style={{ fontSize: "14px", color: "#000000", fontWeight: 600 }}>Registration Details:</p>
            <p>
              {first_name}, {last_name}
            </p>
            <p>
              {business_name} - {license_number}
            </p>
            <p>
              {email}, {phone}
            </p>
            <small style={{color: "#000000", marginBottom: 3}}>Billing Address:</small>
            <p>{billing_address}</p>
            <small style={{color: "#000000", marginBottom: 3}}>Mailing Address:</small>
            <p>{mailing_address}</p>
          </div>

          <div style={{ marginBottom: "30px" }}>
            <p style={{ lineHeight: "18px", fontSize: "11px" }}>
              If this action was not taken by you or you haven't made a purchase from buyhooky.com or its affiliates, please disregard this email and kindly let our team know.
            </p>
          </div>

          <hr
            style={{
              borderColor: "#eeeeee",
              borderWidth: "0.5pt",
              width: "100%",
              margin: "0 0 24px",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", marginBottom: "50px", textAlign: "center" }}>
            <div
              style={{
                textAlign: "center",
                padding: "10px 0",
                margin: "0 auto",
              }}
            >
              <a href={proUrl} style={{ textDecoration: "underline", fontSize: "11px", color: "#2f2f2f" }}>
                Shop PRO
              </a>
            </div>
            <div
              style={{
                textAlign: "center",
                padding: "10px 0",
                margin: "0 auto",
              }}
            >
              <a href={supportUrl} style={{ textDecoration: "underline", fontSize: "11px", color: "#2f2f2f" }}>
                Customer Support
              </a>
            </div>
            <div
              style={{
                textAlign: "center",
                padding: "10px 0",
                margin: "0 auto",
              }}
            >
              <a href={faqUrl} style={{ textDecoration: "underline", fontSize: "11px", color: "#2f2f2f" }}>
                FAQs
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", margin: "0 auto 30px" }}>
            <img src={logoUrl} alt="Your Order" style={{ maxWidth: "100%", height: "auto" }} />
          </div>

          <p style={{ fontSize: "12px", lineHeight: 1.5, color: "#555555", margin: "0 auto" }}>TM and © 2025. All Rights Reserved. | Hooky</p>
        </div>
      </body>
    </html>
  );
};

export default ProRegistrationEmail;
