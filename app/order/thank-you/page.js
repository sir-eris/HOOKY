"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../../../contexts/CartContext";

// export const metadata = {
//   title: "Order - Thank You!",
//   description: "A smooth online purchase process.",
// };

export default function OrderThankYou() {
  const router = useRouter();
  const { cart, clearCart } = useCart();
  const ranOnce = useRef(false);

  useEffect(() => {
    if (ranOnce.current) return;
    ranOnce.current = true;
    const allowed = sessionStorage.getItem("allowed");
    if (allowed !== "true") {
      router.replace("/");
    } else {
      clearCart();
      setTimeout(() => {
        sessionStorage.removeItem("allowed");
      }, 100);
    }
  }, []);

  return (
    <main>
      <section className="min-h-screen w-screen flex items-center py-16">
        <div className="min-h-96 w-full lg:w-1/3 mx-auto flex flex-col justify-start items-center py-8 px-12">
          <h1 className="font-normal text-[14pt] uppercase mb-4 text-center w-full">
            Order successfully placed
          </h1>
          <h2 className="mb-12 text-[10pt] text-slate-600 font-medium">
            Hey there, Trailblazer! A confirmation email with your order details
            will be sent shortly. For any questions or assistance, please{" "}
            <Link href="/contact" className="underline hover:no-underline">
              contact us
            </Link>
            .
          </h2>
          <Link
            href="/order/status"
            className="block ml-auto text-lg font-semibold text-[#70E000] underline underline-offset-4 hover:no-underline"
          >
            Check Order Status
          </Link>
        </div>
      </section>
    </main>
  );
}
