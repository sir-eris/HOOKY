"use client";

import Link from "next/link";
import { useState } from "react";

// const metadata = {
//   title: "Order - Update Shipping Address",
//   description: "A smooth online purchase process.",
// };

async function confirmEmail({ email, orderNumber }) {
  const response = await fetch(`/api/order/update-shipping`, {
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
async function updateAddress({ email, orderNumber, address }) {
  const response = await fetch(`/api/order/update-shipping`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      orderNumber,
      address,
    }),
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

export function OrderUpdateShippingForms({ params }) {
  const { orderNumber } = params;
  const [email, setEmail] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [state, setState] = useState("");

  const [emailError, setEmailError] = useState("");
  const [line1Error, setLine1Error] = useState("");
  const [line2Error, setLine2Error] = useState("");
  const [cityError, setCityError] = useState("");
  const [postalCodeError, setPostalCodeError] = useState("");
  const [stateError, setStateError] = useState("");

  const [closeEmailModal, setCloseEmailModal] = useState(false);
  const [submitEmailError, setSubmitEmailError] = useState("");
  const [submitNewAddressError, setSubmitNewAddressError] = useState("");

  const handleChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    setEmailError("");
    setSubmitEmailError("");
  };
  const handleChangeLine1 = (e) => {
    e.preventDefault();
    setLine1(e.target.value);
    setLine1Error("");
    setSubmitNewAddressError("");
  };
  const handleChangeLine2 = (e) => {
    e.preventDefault();
    setLine2(e.target.value);
    setLine2Error("");
    setSubmitNewAddressError("");
  };
  const handleChangeCity = (e) => {
    e.preventDefault();
    setCity(e.target.value);
    setCityError("");
    setSubmitNewAddressError("");
  };
  const handleChangePostalCode = (e) => {
    e.preventDefault();
    setPostalCode(e.target.value);
    setPostalCodeError("");
    setSubmitNewAddressError("");
  };
  const handleChangeState = (e) => {
    e.preventDefault();
    setState(e.target.value);
    setStateError("");
    setSubmitNewAddressError("");
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|io|info|co|us|uk|ca|in)$/;
    let hasError = false;
    let em = email.replace(/\s+/g, "");

    if (em.length < 1) {
      setEmailError("Please enter your email address");
      hasError = true;
    } else if (!emailRegex.test(em)) {
      setEmailError("Please enter a valid email address");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (hasError) return;

    const response = await confirmEmail({ email, orderNumber });
    if (!response) {
      setSubmitEmailError("Please check your email address and try again.");
    } else {
      setSubmitEmailError("");
      setCloseEmailModal(true);
    }
  };

  const handleNewAddressSubmit = async (e) => {
    e.preventDefault();
    let hasError = false;
    let ln1 = line1.replace(/\s+/g, "");
    let ln2 = line2.replace(/\s+/g, "");
    let ct = city.replace(/\s+/g, "");
    let ps = postalCode.replace(/\s+/g, "");
    let st = state.replace(/\s+/g, "");

    if (ln1.length < 1) {
      setLine1Error("Please enter your street address");
      hasError = true;
    } else if (
      typeof ln1 !== "string" ||
      !/[a-zA-Z0-9]/.test(line1) ||
      !/^[a-zA-Z0-9\s.,#-]+$/.test(ln2)
    ) {
      setLine1Error("Please enter a valid address");
      hasError = true;
    } else {
      setLine1Error("");
    }

    if (
      ln2.length > 0 &&
      (typeof ln2 !== "string" ||
        !/[a-zA-Z0-9]/.test(ln2) ||
        !/^[a-zA-Z0-9\s.,#-]+$/.test(ln2))
    ) {
      setLine2Error("Please enter a valid address");
      hasError = true;
    }

    if (ct.length < 1) {
      setCityError("Please enter your city");
      hasError = true;
    } else if (!/^[a-zA-Z\s\-]+$/.test(ct) || typeof ct !== "string") {
      setCityError("Please enter a valid city");
      hasError = true;
    } else {
      setCityError("");
    }

    if (ps.length < 1) {
      setPostalCodeError("Please enter your post code");
      hasError = true;
    } else if (
      (!/^\d{5}(-\d{4})?$/.test(ps) && !/^[A-Z0-9\s\-]+$/.test(ps)) ||
      typeof ps !== "string"
    ) {
      setPostalCodeError("Please enter a valid postal code");
      hasError = true;
    } else {
      setPostalCodeError("");
    }

    if (st.length < 1) {
      setStateError("Please enter your state");
      hasError = true;
    } else if (!/^[A-Z]{2}$/.test(st) || typeof st !== "string") {
      setStateError("Please enter a valid state (e.g., CA, NY)");
      hasError = true;
    } else {
      setStateError("");
    }

    if (hasError) return;

    const response = await updateAddress({
      email,
      orderNumber,
      address: {
        line1: ln1,
        line2: ln2,
        city: ct,
        postal_code: ps,
        state: st,
        country: "US",
      },
    });

    if (!response) {
      setSubmitNewAddressError(
        "There was an issue completing your request. Please refresh the page and try again."
      );
    }
    setSubmitNewAddressError("");
  };

  return (
    <div className="min-h-96 w-full lg:w-1/3 mx-auto flex flex-col justify-start items-center py-8 px-6">
      <small className="block w-full h-4 mb-12 text-center text-red-500 underline underline-offset-2">
        {submitEmailError}
        {submitNewAddressError}
      </small>
      <h1 className="font-normal text-[14pt] uppercase mb-4 text-center w-full">
        {!closeEmailModal
          ? "First, please confirm your email address"
          : "Enter your new shipping address"}
      </h1>
      <h2 className="mb-12 text-[10pt] text-slate-600 font-medium">
        {!closeEmailModal
          ? "To update the shipping information associated with your order, first confirm your email."
          : "Enter your complete shipping address. Remember you can only change your shipping address before your order is shipped."}
      </h2>

      {!closeEmailModal ? (
        <form onSubmit={handleEmailSubmit} className="w-full block">
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
              Confirm Email Address
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleNewAddressSubmit} className="w-full block">
          <div className="w-full mb-8">
            <div className="flex justify-between items-end mb-4">
              <p className="text-left font-medium text-gray-600 text-xs">
                Street Address
              </p>
              <small className="text-xs text-red-500">{line1Error}</small>
            </div>
            <input
              type="text"
              name="line1"
              className={`rounded-xl border-2 ${
                line1Error.length > 0 ? "border-red-500" : "border-white"
              } bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]`}
              value={line1}
              onChange={handleChangeLine1}
            />
          </div>
          <div className="flex justify-between gap-x-3 lg:gap-x-6">
            <div className="w-1/2 flex-auto mb-8">
              <div className="flex justify-between items-end mb-4">
                <p className="text-left font-medium text-gray-600 text-xs">
                  Unit / suit / ...
                </p>
                <small className="text-xs text-red-500">{line2Error}</small>
              </div>
              <input
                type="text"
                name="line2"
                className={`rounded-xl border-2 ${
                  line2Error.length > 0 ? "border-red-500" : "border-white"
                } bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]`}
                value={line2}
                onChange={handleChangeLine2}
              />
            </div>
            <div className="w-1/2 flex-auto mb-8">
              <div className="flex justify-between items-end mb-4">
                <p className="text-left font-medium text-gray-600 text-xs">
                  City
                </p>
                <small className="text-xs text-red-500">{cityError}</small>
              </div>
              <input
                type="text"
                name="city"
                className={`rounded-xl border-2 ${
                  cityError.length > 0 ? "border-red-500" : "border-white"
                } bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]`}
                value={city}
                onChange={handleChangeCity}
              />
            </div>
          </div>
          <div className="flex justify-between gap-x-3 lg:gap-x-6">
            <div className="w-1/2 mb-8">
              <div className="flex justify-between items-end mb-4">
                <p className="text-left font-medium text-gray-600 text-xs">
                  Zip Code
                </p>
                <small className="text-xs text-red-500">
                  {postalCodeError}
                </small>
              </div>
              <input
                type="text"
                name="postalCode"
                className={`rounded-xl border-2 ${
                  postalCodeError.length > 0 ? "border-red-500" : "border-white"
                } bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]`}
                value={postalCode}
                onChange={handleChangePostalCode}
              />
            </div>
            <div className="w-1/2 mb-8">
              <div className="flex justify-between items-end mb-4">
                <p className="text-left font-medium text-gray-600 text-xs">
                  State
                </p>
                <small className="text-xs text-red-500">{stateError}</small>
              </div>
              <input
                type="text"
                name="state"
                className={`rounded-xl border-2 ${
                  stateError.length > 0 ? "border-red-500" : "border-white"
                } bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]`}
                value={state}
                onChange={handleChangeState}
              />
            </div>
          </div>
          <div className="flex justify-between items-end">
            <Link
              href={`/order/${orderNumber}`}
              className="block text-[10px] lg:text-xs font-semibold text-gray-600 underline underline-offset-4 hover:no-underline"
            >
              Go back
            </Link>
            <button
              type="submit"
              className="block text-sm lg:text-lg font-semibold text-[#70E000] underline underline-offset-4 hover:no-underline"
            >
              Update Shipping Address
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
