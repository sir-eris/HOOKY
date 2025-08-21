"use client";

import Link from "next/link";
import { useState } from "react";

async function cancelOrder({ email, orderNumber }) {
  const response = await fetch(`/api/order/cancel`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, orderNumber }),
  });

  const data = await response.json();

  if (data.redirected) {
    window.location.href = data.url;
    return;
  }
  if (data.ok) {
    return true;
  }
  return false;
}

export function OrderCancelForm({ params }) {
  const { orderNumber } = params;
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitEmailError, setSubmitEmailError] = useState("");

  const handleChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    setEmailError("");
    setSubmitEmailError("");
  };

  const handleCancelOrder = async (e) => {
    e.preventDefault();
    let hasError = false;
    let em = email.replace(/\s+/g, "");

    if (em.length < 1) {
      setEmailError("Please enter a valid email address");
      hasError = true;
    } else {
      setEmailError("");
    }

    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|io|info|co|us|uk|ca|in)$/;
    if (!emailRegex.test(em)) {
      setEmailError("Please enter a valid email address");
      hasError = true;
    } else {
      setEmailError("");
    }
    if (hasError) return;

    const response = await cancelOrder({ email, orderNumber });
    if (!response) {
      setSubmitEmailError("Please check your email address and try again.");
    }
    if (response == true) {
      setSubmitEmailError("");
    }
  };

  return (
    <div className="min-h-96 w-full lg:w-1/3 mx-auto flex flex-col justify-start items-center py-8 px-6">
      <small className="block w-full h-4 mb-12 text-center text-red-500 underline underline-offset-2">
        {submitEmailError}
      </small>
      <h1 className="font-normal text-[14pt] uppercase mb-4 text-center w-full">
        Cancel Your Order
      </h1>
      <h2 className="mb-12 text-[10pt] text-slate-600 font-medium">
        For verification purposes provide your email address. Once submitted, we
        will process your cancellation request and send you a confirmation email.
      </h2>

      <form onSubmit={handleCancelOrder} className="w-full block">
        <div className="w-full mb-8">
          <div className="flex justify-between items-end mb-4">
            <p className="text-left font-medium text-gray-600 text-xs">
              Email associated with order
            </p>
            <small className="text-xs text-red-500">{emailError}</small>
          </div>
          <input
            type="text"
            className={`rounded-xl border-2 ${
              emailError.length > 0 ? "border-red-500" : "border-white"
            } bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]`}
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <div className="flex justify-between items-end">
          <Link
            href={`/order/${orderNumber}`}
            className="block text-xs font-semibold text-gray-600 underline underline-offset-4 hover:no-underline"
          >
            Go back
          </Link>
          <button
            type="submit"
            className="block text-base lg:text-lg ml-auto font-semibold text-[#70E000] underline underline-offset-4 hover:no-underline"
          >
            Cancel Order
          </button>
        </div>
      </form>
    </div>
  );
}
