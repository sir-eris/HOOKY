import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Order Details",
  description: "",
};

export default async function StatusDetails({ params }) {
  const { orderNumber } = params;
  const response = await fetch(
    `http://localhost:3000/api/order/${orderNumber}`,
    {
      cache: "no-store",
    }
  );
  let data = await response.json();
  if (data.redirected) {
    console.log("HI");
    // redirect(data.url);
  }

  const charge = data.charge;
  const payment = data.paymentMethod;
  const orderCreated = new Date(charge.created * 1000);
  const receiptUrl = charge.receipt_url;
  const refunded = charge.refunded;
  const orderId = charge.metadata.order_id;
  const status = charge.metadata.status;
  const isPreOrder = charge.metadata.is_pre_order;
  const canceled = charge.metadata.canceled == 'true';
  const returnStatus = charge.metadata.return_status || '';
  const shippingStatus = charge.metadata.shipping_status || '';
  const shippingAddress = charge.shipping.address;
  const email = charge.billing_details.email;
  const name = charge.shipping.name;
  const phoneNumber = charge.shipping.phone;
  // const currency = charge.currency.toUpperCase();
  // const amount = charge.amount;
  // const paymentType = payment.type;
  // const paymentLast4 = payment.last4;
  // const paymentCreated = payment.created;
  // TODO:
  const carrier = charge.shipping.carrier;
  const trackingNumber = charge.shipping.tracking_number;
  const orderPlaced = orderCreated.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  if (response.redirected) {
    console.log("HO")
    // window.location.href = response.url;
  }
  
  return (
    <main>
      <section className="min-h-96 lg:min-h-screen w-screen flex justify-center items-center pt-12">
        <div className="w-full lg:w-1/3 flex flex-col justify-start items-center py-8 px-12">
          <h1 className="font-normal text-base lg:text-[14pt] uppercase mb-6 text-center w-full">
            Your {isPreOrder ? "pre-order" : "order"}{" "}
            {canceled
              ? "has been canceled. And a full refund was processed on you original payment method."
              : "is confirmed. You will be notified once your order ships."}
          </h1>
          <hr className="w-full mb-12" />
          <div className="w-full mb-6 text-center">
            {!canceled ? (
              <>
                <p className="mb-1 text-xl text-[#70E000] font-bold">
                  {isPreOrder ? "Pre-order" : "Order"} placed
                </p>
                <small className="block mb-4 text-xs text-gray-400">
                  {orderId} –– {orderPlaced}
                </small>
                <svg
                  className="block mx-auto mb-4"
                  width="2"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1"
                    y1="0"
                    x2="1"
                    y2="100"
                    stroke="gray"
                    strokeWidth="1.5"
                  />
                </svg>
                <p className="mb-1 text-gray-400 text-base">Shipped</p>
                <small className="block mb-4 text-xs text-gray-400">
                  Tracking info will appear hear.
                </small>
                <svg
                  className="block mx-auto mb-4"
                  width="2"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1"
                    y1="0"
                    x2="1"
                    y2="100"
                    stroke="gray"
                    strokeWidth="1.5"
                  />
                </svg>
                <p className="mb-1 text-gray-400 text-base">Delivered</p>
                <small className="block mb-4 text-xs text-gray-400"></small>
              </>
            ) : (
              <>
                <p className="mb-1 text-base text-gray-400">
                  {isPreOrder ? "Pre-order" : "Order"} placed
                </p>
                <small className="block mb-4 text-xs text-gray-400">
                  {orderId} –– {orderPlaced}
                </small>
                <svg
                  className="block mx-auto mb-4"
                  width="2"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1"
                    y1="0"
                    x2="1"
                    y2="100"
                    stroke="gray"
                    strokeWidth="1.5"
                  />
                </svg>
                <p className="mb-1 text-xl text-[#70E000] font-bold">
                  Canceled
                </p>
              </>
            )}

            {/* <svg
              className="block mx-auto mb-4"
              width="2"
              height="100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="100"
                stroke="gray"
                strokeWidth="1.5"
              />
            </svg>
            <p className="text-gray-400 text-sm mb-4">
              Return requested 12 hours ago
            </p>
            <svg
              className="block mx-auto mb-4"
              width="2"
              height="100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="100"
                stroke="gray"
                strokeWidth="1.5"
              />
            </svg>
            <p className="text-gray-400 text-sm mb-1">
              Return shipping label issued
            </p>
            <p className="text-[8pt] text-gray-500 underline mb-4">
              Resend to email
            </p>
            <svg
              className="block mx-auto mb-4"
              width="2"
              height="100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="100"
                stroke="gray"
                strokeWidth="1.5"
              />
            </svg>
            <p className="mb-4 text-gray-400 text-sm">
              Shipment received 5 hours ago
            </p>
            <svg
              className="block mx-auto mb-4"
              width="2"
              height="100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="100"
                stroke="gray"
                strokeWidth="1.5"
              />
            </svg>
            <p className="mb-4 text-gray-400 text-sm">
              Return approved 2 hours ago
            </p>
            <svg
              className="block mx-auto mb-4"
              width="2"
              height="100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="100"
                stroke="gray"
                strokeWidth="1.5"
              />
            </svg>
            <p className="text-gray-400 text-sm mb-1">
              Refund issued back to original payment method
            </p>
            <p className="text-[8pt] text-gray-500 mb-4">
              Reference number: nbvwe97y2rg7yn02497ryg20n
            </p> */}
          </div>

          {!canceled ? (
            <>
              {/* <div className="w-full flex justify-between border-b mb-6 pb-6">
            <div className="w-full">
              <small className="block">Order Summary:</small>
              <div className="flex justify-between items-end mb-2">
                <p>Hooky in Legacy Gray With Extended Battery</p>
                <p className="text-sm">$249.99</p>
              </div>
              <div className="flex justify-between items-end mb-2">
                <p>Pack of Extra Tips</p>
                <p className="text-sm">$29.99</p>
              </div>
              <small>Total ({currency}):</small>
              <p className="mb-2">{amount}</p>
              <small>Tax:</small>
              <p className="mb-2">12.67</p>
              <small>Shipping:</small>
              <p className="mb-2">Included</p>
            </div>
          </div> */}
              <div className="text-left w-full border-b mb-6 pb-6 pt-6 border-t">
                <small className="mb-2 block">Shipping Details:</small>
                <p>
                  {shippingAddress.line1},{" "}
                  {shippingAddress.line2 ? shippingAddress.line2 + ", " : null}
                  {shippingAddress.city}, {shippingAddress.state}{" "}
                  {shippingAddress.postal_code}
                </p>
              </div>
              {/* <div className="text-left w-full border-b mb-6 pb-6">
            <small>Payment Method:</small>
            <p>Visa card ending in 5431</p>
          </div> */}
              <div className="grid grid-cols-2 gap-x-6 w-full mb-6">
                {shippingStatus != "shipped" ? (
                  <Link
                    href={`/order/${orderNumber}/update-shipping`}
                    className="block mb-1 text-[10px] lg:text-xs underline-offset-2 underline hover:no-underline"
                  >
                    Update Shipping Address
                  </Link>
                ) : null}
                <Link
                  href={receiptUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-1 text-[10px] lg:text-xs underline-offset-2 underline hover:no-underline"
                >
                  Payment Receipt
                </Link>
                {shippingStatus.length == 0 ? (
                  <Link
                    href={`/order/${orderNumber}/cancel`}
                    className="block mb-1 text-[10px] lg:text-xs underline-offset-2 underline hover:no-underline"
                  >
                    Cancel {isPreOrder ? "Pre-order" : "Cancel Order"}
                  </Link>
                ) : null}
              </div>
            </>
          ) : null}
        </div>
      </section>
    </main>
  );
}
