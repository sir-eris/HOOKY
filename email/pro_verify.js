import React from "react";

const ProMemberVerificationEmail = ({ title, name, business_license, pro_member_id, supportUrl, proUrl, faqUrl, logoUrl }) => {
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
            PRO Member Verification
          </p>
          <hr
            style={{
              borderColor: "#eeeeee",
              borderWidth: "0.5pt",
              width: "100%",
              margin: "0 0 30px",
            }}
          />
          <p style={{ fontSize: "16px", margin: "0 0 10px" }}>Hi {name},</p>
          <p
            style={{
              fontSize: "15px",
              margin: "0 0 50px",
              lineHeight: "24px",
            }}
          >
            Your B2B account has been successfully verified. You now have exclusive access to <a href={proUrl}>PRO</a>, PRO pricing, bulk ordering, and other exclusive
            business features. You can start shopping and managing your orders anytime through our website. If you have any questions or need assistance, your dedicated account
            manager is here to help -{" "}
            <a href={supportUrl} style={{ color: "#000000" }}>
              contact support
            </a>
            .
          </p>

          <div style={{ marginBottom: "50px" }}>
            <p style={{ fontSize: "16px", color: "#000000", fontWeight: 500 }}>Pro Member ID: {pro_member_id}</p>
            <p style={{ fontSize: "16px", color: "#000000", fontWeight: 500 }}>Business License Number: {business_license}</p>
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
          <div style={{ marginTop: "20px", marginBottom: "50px", textAlign: "center" }}>
            <div
              style={{
                display: "inline-block",
                width: "150px",
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
                display: "inline-block",
                width: "150px",
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
                display: "inline-block",
                width: "150px",
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

export default ProMemberVerificationEmail;
