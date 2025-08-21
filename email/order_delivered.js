import React from "react";

const OrderDeliveredEmail = ({ title, name, orderId, orderPlaced, OrderStatusUrl, shippingCarrier, shippingTrackingNumber, shippingTrackingLink, paymentUrl, supportUrl, logoUrl }) => (<html>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>{title}</title>
      <style></style>
    </head>
    <body style={{ fontFamily: "Montserrat, sans-serif", margin: "0", padding: "0", backgroundColor: "#ffffff", color: "#4f4f4f" }}>
  <div
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
          fontSize: 20,
        }}
      >
        Order Delivered
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
        Your order has been delivered! We hope you love it. If you have any questions or need help with anything, we’re just a click away. Thank you for shopping with
        us!
      </p>

      <div style={{ margin: "0 0 50px" }}>
        <p
          style={{
            margin: "0 0 6px",
            fontSize: 16,
            fontWeight: 500,
            color: "#9e9e9e",
          }}
        >
          Order placed
        </p>
        <small
          style={{
            display: "block",
            margin: "0 0 10px",
            fontSize: 12,
            color: "#9e9e9e",
          }}
        >
          {orderId} - {orderPlaced}
        </small>
        <div style={{ width: "2px", height: "70px", margin: "15px auto", backgroundColor: "#CCCCCC" }}></div>
        <p
          style={{
            margin: "0 0 6px",
            fontSize: 16,
            fontWeight: 500,
            color: "#9e9e9e",
          }}
        >
          Shipped
        </p>
        <small
          style={{
            display: "block",
            margin: "0 0 10px",
            fontSize: 12,
            color: "#9e9e9e",
          }}
        >
          <a href={shippingTrackingLink} style={{ color: "#9e9e9e" }}>
            {shippingCarrier} #{shippingTrackingNumber}
          </a>
        </small>
        <div style={{ width: "2px", height: "70px", margin: "15px auto", backgroundColor: "#CCCCCC" }}></div>
        <p
          style={{
            margin: "0 0 6px",
            fontSize: 20,
            fontWeight: 500,
            color: "#70e000",
          }}
        >
          Delivered
        </p>
        <small
          style={{
            display: "block",
            margin: "0 0 10px",
            fontSize: 12,
            color: "#9e9e9e",
          }}
        >
          Tuesday 11:30 AM - Apr 24
        </small>
      </div>

      <div style={{ marginBottom: 30 }}>
        <p style={{ lineHeight: "18px", fontSize: 11 }}>
          If this action was not taken bu you or you haven't made a purchase from buyhooky.com or its affiliates, please disregard this email and kindly let our team know.
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

      <div
        style={{
          marginTop: 20,
          marginBottom: 50,
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            width: 150,
            textAlign: "center",
            padding: "10px 0",
            margin: "0 auto",
          }}
        >
          <a
            href={OrderStatusUrl}
            style={{
              textDecoration: "underline",
              fontSize: 11,
              color: "#2f2f2f",
            }}
          >
            Check Order Status
          </a>
        </div>
        <div
          style={{
            display: "inline-block",
            width: 150,
            textAlign: "center",
            padding: "10px 0",
            margin: "0 auto",
          }}
        >
          <a
            href={paymentUrl}
            style={{
              textDecoration: "underline",
              fontSize: 11,
              color: "#2f2f2f",
            }}
          >
            Payment confirmation
          </a>
        </div>
        <div
          style={{
            display: "inline-block",
            width: 150,
            textAlign: "center",
            padding: "10px 0",
            margin: "0 auto",
          }}
        >
          <a
            href={supportUrl}
            style={{
              textDecoration: "underline",
              fontSize: 11,
              color: "#2f2f2f",
            }}
          >
            Customer Support
          </a>
        </div>
      </div>

      <div style={{ textAlign: "center", margin: "0 auto 30px" }}>
        <img src={logoUrl} alt="Your Order" style={{ maxWidth: "100%", height: "auto" }} />
      </div>

      <p
        style={{
          fontSize: 12,
          lineHeight: 1.5,
          color: "#555555",
          margin: "0 auto",
        }}
      >
        TM and © 2025. All Rights Reserved. | Hooky
      </p>
    </div>
  </div>
  </body>
  </html>
);

export default OrderDeliveredEmail;
