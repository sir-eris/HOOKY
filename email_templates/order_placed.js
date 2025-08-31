import * as React from 'react';

const OrderPlacedEmail = ({ title, name, orderId, orderDate, items, OrderStatusUrl, PaymentUrl, SupportUrl, logoUrl }) => (
  <html>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>{title}</title>
      <style></style>
    </head>
    <body style={{ fontFamily: "Montserrat, sans-serif", margin: "0", padding: "0", backgroundColor: "#ffffff", color: "#4f4f4f" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "50px 25px", backgroundColor: "#ffffff", borderRadius: "8px", textAlign: "center", letterSpacing: "0.5pt" }}>
        <div style={{ textAlign: "center", margin: "0 auto 30px" }}>
          <img src={logoUrl} alt="Your Order" style={{ maxWidth: "100%", height: "auto" }} />
        </div>

        <p style={{ fontWeight: "300", textTransform: "uppercase", margin: "0 0 15px", fontSize: "20px" }}>Order Confirmation</p>
        <hr style={{ borderColor: "#eeeeee", borderWidth: "0.5pt", width: "100%", margin: "0 0 30px" }} />
        <p style={{ fontSize: "16px", margin: "0 0 10px" }}>Hi {name},</p>
        <p style={{ fontSize: "15px", margin: "0 0 50px", lineHeight: "24px" }}>
          Thank you for your order! You can always follow the status of your order on our website. We will notify you once your order has shipped.
        </p>

        <div style={{ margin: "0 0 50px" }}>
          <p style={{ margin: "0 0 6px", fontSize: "20px", fontWeight: "bold", color: "#70e000" }}>Order Placed</p>
          <small style={{ display: "block", margin: "0 0 10px", fontSize: "12px", color: "#9e9e9e" }}>
            {orderId} - {orderDate}
          </small>
          <div style={{ width: "2px", height: "70px", margin: "15px auto", backgroundColor: "#CCCCCC" }}></div>
          <p style={{ margin: "0 0 6px", fontSize: "16px", fontWeight: "medium", color: "#9e9e9e" }}>Shipped</p>
          <small style={{ display: "block", margin: "0 0 10px", fontSize: "12px", color: "#9e9e9e" }}>Tracking info will appear hear.</small>
          <div style={{ width: "2px", height: "70px", margin: "15px auto", backgroundColor: "#CCCCCC" }}></div>
          <p style={{ margin: "0 0 10px", fontSize: "16px", fontWeight: "medium", color: "#9e9e9e" }}>Delivered</p>
        </div>

        {items.length > 0 && (
          <div style={{ marginBottom: "30px", fontWeight: "500", color: "#444" }}>
            <small style={{ display: "block", marginBottom: "12px", textAlign: "left" }}>Order summary:</small>
            {items.map((item) => (
              <div style={{ display: "flex", justifyContent: "space-baseline", alignItems: "flex-start", marginBottom: "6px", padding: "6px 0", borderBottom: "1px solid #ddd" }}>
                <span style={{ display: "inline-block", width: "10%", fontSize: "14px", textAlign: "center" }}>1x</span>
                <div style={{ display: "inline-block", width: "66%", fontSize: "14px", textAlign: "left" }}>
                  <p style={{ margin: "0", marginBottom: "8px", padding: "0" }}>
                    {item.title} in {item.model.title}
                  </p>
                  {item.checkOutOptions.length > 0
                    ? item.checkOutOptions.map((option, _) => (
                        <span key={_} style={{ display: "block", color: "#888", fontSize: "12px", margin: "0", marginBottom: "6px" }}>
                          {option.title}
                        </span>
                      ))
                    : null}
                </div>
                <div style={{ display: "inline-block", width: "20%", fontSize: "14px", textAlign: "right" }}>
                  <p style={{ margin: "0", marginBottom: "8px", padding: "0" }}>$199.99</p>
                  {item.checkOutOptions.length > 0
                    ? item.checkOutOptions.map((option, _) => (
                        <p key={_} style={{ display: "block", color: "#888", fontSize: "12px", margin: "0", marginBottom: "6px" }}>
                          {option.price}
                        </p>
                      ))
                    : null}
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginBottom: "30px" }}>
          <p style={{ lineHeight: "18px", fontSize: "11px" }}>
            If this action was not taken bu you or you haven't made a purchase from hookystore.com or its affiliates, please disregard this email and kindly let our team know.
          </p>
        </div>
        <hr style={{ borderColor: "#eeeeee", borderWidth: "0.5pt", width: "100%", margin: "0 0 24px" }} />
        <div style={{ marginTop: "20px", marginBottom: "50px", textAlign: "center" }}>
          <div style={{ display: "inline-block", width: "150px", textAlign: "center", padding: "10px 0", margin: "0 auto" }}>
            <a href={OrderStatusUrl} style={{ textDecoration: "underline", fontSize: "11px", color: "#2f2f2f" }}>
              Check Order Status
            </a>
          </div>
          <div style={{ display: "inline-block", width: "150px", textAlign: "center", padding: "10px 0", margin: "0 auto" }}>
            <a href={PaymentUrl} style={{ textDecoration: "underline", fontSize: "11px", color: "#2f2f2f" }}>
              Payment confirmation
            </a>
          </div>
          <div style={{ display: "inline-block", width: "150px", textAlign: "center", padding: "10px 0", margin: "0 auto" }}>
            <a href={SupportUrl} style={{ textDecoration: "underline", fontSize: "11px", color: "#2f2f2f" }}>
              Customer Support
            </a>
          </div>
        </div>

        <div style={{ textAlign: "center", margin: "0 auto 30px" }}>
          <img src={logoUrl} alt="Your Order" style={{ maxWidth: "100%", height: "auto" }} />
        </div>

        <p style={{ fontSize: "12px", lineHeight: "1.5", color: "#555555", margin: "0 auto" }}>TM and © 2025. All Rights Reserved. | Hooky</p>
      </div>
    </body>
  </html>
);

export default OrderPlacedEmail;