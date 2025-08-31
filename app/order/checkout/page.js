"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../../../contexts/CartContext";
import { CheckoutProvider } from "@stripe/react-stripe-js";
import CheckOutForm from "../../../components/forms/checkOutForm";

import { loadStripe } from "@stripe/stripe-js";
const stripe = loadStripe(
  "pk_test_51Qj9MpChMScoUAyjBAXxV2kq4IhURds8c5vCqncvXL9dOFMIFXT6NwmE7zXiXu1KQI8KipYn75ZeeSir3cGgyKHf00JWgvpbw5",
  {
    betas: ["custom_checkout_beta_6"],
  }
);

const appearance = {
  theme: "stripe",
  variables: {
    colorPrimary: "#2f2f2f",
    colorBackground: "#ffffff",
    colorText: "#2f2f2f",
    colorDanger: "#ef4444",
    fontFamily: "Montserrat, system-ui, sans-serif",
    spacingUnit: "2px",
    borderRadius: "12px",
  },
  rules: {
    ".Tab": {
      border: "none",
      boxShadow: "none",
    },
    ".TabIcon": {},
    ".Label": {
      fontWeight: 500,
      fontSize: "13px",
      color: "rgb(75, 85, 99)",
      marginBottom: "8px",
    },
    ".Input": {
      border: "2px solid #ffffff",
      outline: "1.5px solid #cbd5e1",
      marginBottom: "12px",
      marginRight: "12px",
      padding: "8px 16px",
      transition: "none",
    },
    ".Input:focus": {
      boxShadow: "none",
      borderColor: "rgb(137, 252, 0)",
      outline: "1.5px solid #cbd5e1",
    },
    ".Error": {
      marginBottom: "16px",
      color: "rgb(239, 68, 68)",
      fontSize: "12px",
      fontWeight: 500,
    },
    ".Block": {
      borderColor: "none",
      boxShadow: "none",
    },
    ".Tab:hover": {
      color: "var(--colorText)",
    },
    ".Tab--selected": {
      borderColor: "none",
      boxShadow: "none",
    },
    ".Input--invalid": {
      boxShadow:
        "0 1px 1px 0 rgba(0, 0, 0, 0.07), 0 0 0 2px var(--colorDanger)",
    },
  },
};

export default function Checkout() {
  const router = useRouter();
  const { cart, removeReserve } = useCart();
  const [loadingCart, setLoadingCart] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const started = sessionStorage.getItem("checkoutStarted");

      if (!cart || cart === null || cart === undefined || !cart.items.length) {
        setLoadingCart(true);
      }
      if (!started) {
        router.replace("/cart");
      }
    }, []);

    useEffect(() => {
      if (typeof window !== "undefined") {
        if (cart.items.length > 0) {
          setLoadingCart(false);
        }
      }
    }, [cart]);

  const fetchClientSecret = async () => {
    if (!cart.items?.length) return;
    setLoading(true);
    let FETCH_URI = "";
    let body;
    if (cart.quick != null) {
      console.log(Date.now() - cart.quick.createdAt);
      if (Date.now() - cart.quick.createdAt > 60000) {
        removeReserve();
        router.replace("/cart");
        return;
      } else {
        FETCH_URI = "/api/order/checkout/quick";
        body = cart.quick;
      }
    } else {
      FETCH_URI = "/api/order/checkout";
      body = cart.items;
      removeReserve();
    }
    const response = await fetch(FETCH_URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...body }),
    });
    const data = await response.json();
    if (data.error) {
      setHasError(true);
      setLoading(false);
      return;
    } else {
      setLoading(false);
      return data.client_secret;
    }
  };

  return (
    <main className="pt-12">
      <section className="min-h-screen w-screen flex items-center py-16 bg-[url('/.png')] bg-no-repeat bg-center bg-contain">
        <div className="min-h-screen w-full px-6 lg:px-0 lg:w-2/5 mx-auto flex flex-col justify-start items-center">
          <div className="mb-12">
            <h1 className="font-normal text-[14pt] uppercase mb-4 text-center w-full">
              Checkout
            </h1>
            <h2 className="text-[10pt] text-slate-600 font-medium">
              To place your order, fill out the form below with your payment and
              shipping information. Once completed, review your details and
              submit to finalize your purchase.
            </h2>
          </div>
          {hasError && (
            <div className="notification warning">
              There was a problem validating the session. Please try again.
            </div>
          )}
          {loading && (
            <div className="min-h-96 w-full flex items-center justify-center">
              <div className="spinner-box mt-4">
                <div className="pulse-container">
                  <div className="pulse-bubble pulse-bubble-1"></div>
                  <div className="pulse-bubble pulse-bubble-2"></div>
                  <div className="pulse-bubble pulse-bubble-3"></div>
                </div>
              </div>
            </div>
          )}
          {!loadingCart ? (
            <CheckoutProvider
              stripe={stripe}
              options={{
                fetchClientSecret,
                elementsOptions: {
                  appearance,
                },
              }}
            >
              <CheckOutForm />
            </CheckoutProvider>
          ) : (
            "loading..."
          )}
        </div>
      </section>
    </main>
  );
}
