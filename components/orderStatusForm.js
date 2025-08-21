"use client";
import Link from "next/link";
import { useState } from "react";

async function orderStatus({ email, order_id }) {
  const response = await fetch("/api/order/status", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, order_id }),
  });
  const data = await response.json();
  if (data.redirected) {
    window.location.href = data.url;
    return;
  }
  if (data.error) {
    return data.error;
  }
}

export function OrderStatusForm() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [orderId, setOrderId] = useState("");
  const [orderIdError, setOrderIdError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    setEmailError("");
    setSubmitError("");
  };

  const handleChangeOrderId = (e) => {
    e.preventDefault();
    setOrderId(e.target.value);
    setOrderIdError("");
    setSubmitError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|io|info|co|us|uk|ca|in)$/;
    const orderIdRegex = /^[a-zA-Z0-9]{7}$/;
    let hasError = false;
    let em = email.replace(/\s+/g, "");
    let oi = orderId.replace(/\s+/g, "");

    if (em.length < 1) {
      setEmailError("Please enter your email address");
      hasError = true;
    } else if (!emailRegex.test(em)) {
      setEmailError("Please enter a valid email address");
      hasError = true;
    } else {
      setEmailError("");
    }
    if (oi.length < 1) {
      setOrderIdError("Please enter your order number");
      hasError = true;
    } else if (!orderIdRegex.test(oi)) {
      setOrderIdError("Please enter a valid order number");
      hasError = true;
    } else {
      setOrderIdError("");
    }

    if (hasError) {
      setLoading(false);
      return
    };

    const error = await orderStatus({ email: email, order_id: orderId });
    if (error == "no user") {
      setSubmitError("Please check your email address and try again.");
    }
    if (error == "no order") {
      setSubmitError("Please check your order number and try again.");
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-full w-full lg:w-2/5 mx-auto flex flex-col justify-start items-center py-8 px-12"
    >
      <small className="block w-full h-4 mb-12 text-center text-red-500 underline underline-offset-2">
        {submitError}
      </small>
      <h1 className="font-normal text-[14pt] uppercase mb-4 text-center w-full">
        Check your order status
      </h1>
      <h2 className="mb-12 text-[10pt] text-slate-600 font-medium">
        To check the status of your order, fill out the form below with your
        order details. Once submitted, you'll be able to view the most
        up-to-date information about your order.
      </h2>
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
      <div className="w-full mb-16">
        <div className="flex justify-between items-end mb-4">
          <p className="text-left font-medium text-gray-600 text-xs">
            Order Number
          </p>
          <small className="text-xs text-red-500">{orderIdError}</small>
        </div>
        <input
          type="text"
          className={`rounded-xl border-2 ${
            orderIdError.length > 0 ? "border-red-500" : "border-white"
          } bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]`}
          value={orderId}
          onChange={handleChangeOrderId}
        />
      </div>
      {!loading ? (
        <button
          type="submit"
          className="text-lg ml-auto font-semibold text-[#70E000] underline underline-offset-4 hover:no-underline"
        >
          Check Status
        </button>
      ) : (
        <div className="spinner-box mt-4 ml-auto">
          <div className="pulse-container">
            <div className="pulse-bubble pulse-bubble-1"></div>
            <div className="pulse-bubble pulse-bubble-2"></div>
            <div className="pulse-bubble pulse-bubble-3"></div>
          </div>
        </div>
      )}
    </form>
  );
}
