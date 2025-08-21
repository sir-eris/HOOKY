
const OrderShippingAddressUpdatedEmail = ({ title, name, orderId, orderPlaced, orderStatusUrl, PaymentUrl, supportUrl, logoUrl }) => (
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
          maxWidth: 600,
          margin: "0 auto",
          padding: "50px 20px",
          backgroundColor: "#ffffff",
          borderRadius: 8,
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
            fontSize: 22,
          }}
        >
          Shipping Address Updated
        </p>
        <hr
          style={{
            borderColor: "#eeeeee",
            borderWidth: "0.5pt",
            width: "100%",
            margin: "0 0 30px",
          }}
        />
        <p style={{ fontSize: 16, margin: "0 0 10px" }}>Hi {name},</p>
        <p style={{ fontSize: 15, margin: "0 0 50px", lineHeight: "24px" }}>
          Your shipping address for order #{orderId} has been successfully updated. You can always follow the status of your order on our website.
        </p>

        <div style={{ marginBottom: 50 }}>
          <p style={{ fontSize: 14, color: "#000000", fontWeight: 500 }}>New Shipping address:</p>
          <p>15 MacArthur Pl., UNIT 2402, Santa Ana, CA 92707, USA</p>
        </div>

        <div style={{ marginBottom: 30 }}>
          <p style={{ lineHeight: "18px", fontSize: 11 }}>
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
        <div style={{ margin: "20px 0", textAlign: "center" }}>
          <div
            style={{
              display: "inline-block",
              width: 150,
              textAlign: "center",
              padding: "10px 0",
              margin: "0 auto 50px",
            }}
          >
            <a href={orderStatusUrl} style={{ textDecoration: "underline", fontSize: 11, color: "#2f2f2f" }}>
              Check Order Status
            </a>
          </div>
          <div
            style={{
              display: "inline-block",
              width: 150,
              textAlign: "center",
              padding: "10px 0",
              margin: "0 auto 50px",
            }}
          >
            <a href={PaymentUrl} style={{ textDecoration: "underline", fontSize: 11, color: "#2f2f2f" }}>
              Payment confirmation
            </a>
          </div>
          <div
            style={{
              display: "inline-block",
              width: 150,
              textAlign: "center",
              padding: "10px 0",
              margin: "0 auto 50px",
            }}
          >
            <a href={supportUrl} style={{ textDecoration: "underline", fontSize: 11, color: "#2f2f2f" }}>
              Customer Support
            </a>
          </div>
        </div>

        <div style={{ textAlign: "center", margin: "0 auto 30px" }}>
          <img src={logoUrl} alt="Your Order" style={{ maxWidth: "100%", height: "auto" }} />
        </div>

        <p style={{ fontSize: 12, lineHeight: 1.5, color: "#555555", margin: "0 auto" }}>TM and © 2025. All Rights Reserved. | Hooky</p>
      </div>
    </body>
  </html>
);

export default OrderShippingAddressUpdatedEmail;