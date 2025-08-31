"use client";
"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

async function register(data) {
  const response = await fetch(`/api/pro/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

function AddressAutocomplete({ onSelect, ...props }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (!window.google || !inputRef.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(
      inputRef.current,
      {
        types: ["address"],
        componentRestrictions: { country: "us" }, // Optional
      }
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      const components = place.address_components;
      const getComponent = (type) =>
        components.find((c) => c.types.includes(type))?.short_name || "";
      const city =
        getComponent("locality") ||
        getComponent("sublocality") ||
        getComponent("postal_town");
      const state = getComponent("administrative_area_level_1");
      const zip = getComponent("postal_code");
      const country = getComponent("country");
      const streetAddress =
        getComponent("street_number") + " " + getComponent("route");

      if (components && place.formatted_address) {
        onSelect( streetAddress + ", " + city + ", " + state + ", " + zip + ", " + country );
      }
    });
  }, []);

  return <input ref={inputRef} {...props} placeholder="" />;
}

const ProRegisterForm = () => {
  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    role: "",
    business_size: "",
    business_name: "",
    business_license_number: "",
    billing_address_1: "",
    billing_address_2: "",
    mailing_address_1: "",
    mailing_address_2: "",
    email: "",
    phone: "",
  });
  const [inputsError, setInputsError] = useState({
    first_name: "",
    last_name: "",
    role: "",
    business_size: "",
    business_name: "",
    business_license_number: "",
    billing_address_1: "",
    billing_address_2: "",
    mailing_address_1: "",
    mailing_address_2: "",
    email: "",
    phone: "",
  });
  const [confirmModal, setConfirmModal] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleInputChange = (e, name) => {
    e.preventDefault();
    setInputs(prev => ({...prev, [name]: e.target.value}));
    setInputsError((prev) => ({ ...prev, [name]: "" }));
    setSubmitError("");
  };
  
  const handleAutoAddress = (name, value) => {
    setInputs(prev => ({...prev, [name]: value}));
    setInputsError((prev) => ({ ...prev, [name]: "" }));
    setSubmitError("");
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    let hasError = false;
    const errorMessages = {
      first_name: "",
      last_name: "",
      role: "",
      business_size: "",
      business_name: "",
      business_license_number: "",
      billing_address_1: "",
      billing_address_2: "",
      mailing_address_1: "",
      mailing_address_2: "",
      email: "",
      phone: "",
    };

    const nameRegex = /^[a-zA-Z]+$/;
    const businessLicenseRegex = /^[A-Za-z0-9]+$/;
    const addressRegex = /^[A-Za-z0-9\s,.'-]{3,}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phoneRegex = /^(\+?[0-9]{1,4})?(\s|-)?(\([0-9]{3}\))?(\s|-)?([0-9]{3})(\s|-)?([0-9]{4})$/;

    if (!inputs.first_name || !nameRegex.test(inputs.first_name)) {
      errorMessages.first_name = " Please enter your valid first name.";
      hasError = true;
    }
    if (!inputs.last_name || !nameRegex.test(inputs.last_name)) {
      errorMessages.last_name = "Please enter your valid last name.";
      hasError = true;
    }
    if (!inputs.email || !emailRegex.test(inputs.email)) {
      errorMessages.email = "Please enter a valid email address.";
      hasError = true;
    }
    if (!inputs.phone || !phoneRegex.test(inputs.phone)) {
      errorMessages.phone = "Please enter a valid phone number.";
      hasError = true;
    }
    if (!inputs.business_license_number || !businessLicenseRegex.test(inputs.business_license_number)) {
      errorMessages.business_license_number = "Please enter a valid business license number.";
      hasError = true;
    }
    if (!inputs.business_name) {
      errorMessages.business_name = "Please enter your valid business name.";
      hasError = true;
    }
    if (!inputs.business_size) {
      errorMessages.business_size = "Please enter your business size.";
      hasError = true;
    }
    if (!inputs.role) {
      errorMessages.role = "Please Enter your role in your business.";
      hasError = true;
    }
    if (!inputs.billing_address_1 || !addressRegex.test(inputs.billing_address_1)) {
      errorMessages.billing_address_1 = "Please enter a valid shipping address.";
      hasError = true;
    }
    if (!inputs.mailing_address_1 || !addressRegex.test(inputs.mailing_address_1)) {
      errorMessages.mailing_address_1 = "Please enter a valid mailing address.";
      hasError = true;
    }

    setInputsError(errorMessages);
    if (hasError) return;

    const response = await register(inputs);
    if (response?.redirected) {
      window.location = response.url;
      return;
    }
    if (response?.error) {
      setSubmitError(response.error.message);
    } else {
      setConfirmModal(true);
      setInputs({
        first_name: "",
        last_name: "",
        role: "",
        business_size: "",
        business_name: "",
        business_license_number: "",
        business_size: "",
        billing_address_1: "",
        billing_address_2: "",
        mailing_address_1: "",
        mailing_address_2: "",
        email: "",
        phone: "",
      });
      setInputsError(errorMessages);
    }
    window.scrollTo(0, 0);
  };

  return (
    <section className="min-h-screen w-full lg:w-2/5 mx-auto flex flex-col justify-center items-center px-6 pt-12 pb-16">
      {submitError && <small className="block w-full h-4 mb-12 text-center text-red-500 underline underline-offset-2">{submitError}</small>}
      <h1 className="font-normal text-[14pt] uppercase mb-4 text-center w-full">{confirmModal ? "Thank you for submitting your information" : "Enter your business details"}</h1>
      <h2 className="mb-12 text-[10pt] text-slate-600 font-medium">
        {confirmModal
          ? "You will receive an email confirmation along with information regarding next steps. If no further information is needed you will receive an email containing your Pro Member ID."
          : "In order to avoid delays registration, please make sure to provide complete and valid information."}
      </h2>
      {confirmModal ? (
        <Link href="/pro" className="block ml-auto text-base lg:text-lg font-semibold text-[#70E000] underline underline-offset-4 hover:no-underline">
          Explore PRO
        </Link>
      ) : (
        <form onSubmit={handleSubmitForm} className="w-full block">
          <div className="w-full flex gap-x-6">
            <div className="w-1/2 mb-8">
              <div className="flex justify-between items-end mb-4">
                <p className="text-left font-medium text-gray-600 text-xs">First Name (Legal)</p>
                <small className="text-xs text-red-500">{inputsError.first_name}</small>
              </div>
              <input
                type="text"
                className={`rounded-xl border-2 ${
                  inputsError.first_name ? "border-red-500" : "border-white"
                } bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]`}
                value={inputs.first_name}
                onChange={(e) => handleInputChange(e, "first_name")}
              />
            </div>
            <div className="w-1/2 mb-8">
              <div className="flex justify-between items-end mb-4">
                <p className="text-left font-medium text-gray-600 text-xs">Last Name (Legal)</p>
                <small className="text-xs text-red-500">{inputsError.last_name}</small>
              </div>
              <input
                type="text"
                className={`rounded-xl border-2 ${
                  inputsError.last_name ? "border-red-500" : "border-white"
                } bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]`}
                value={inputs.last_name}
                onChange={(e) => handleInputChange(e, "last_name")}
              />
            </div>
          </div>

          <div className="w-full flex gap-x-6">
            <div className="w-1/2 mb-8">
              <div className="flex justify-between items-end mb-4">
                <p className="text-left font-medium text-gray-600 text-xs">Your Role</p>
                <small className="text-xs text-red-500">{inputsError.role}</small>
              </div>
              <input
                type="text"
                className={`rounded-xl border-2 ${
                  inputsError.role ? "border-red-500" : "border-white"
                } bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]`}
                value={inputs.role}
                onChange={(e) => handleInputChange(e, "role")}
              />
            </div>
            <div className="w-1/2 mb-8">
              <div className="flex justify-between items-end mb-4">
                <p className="text-left font-medium text-gray-600 text-xs">Business Size</p>
                <small className="text-xs text-red-500">{inputsError.business_size}</small>
              </div>
              <input
                type="text"
                className={`rounded-xl border-2 ${
                  inputsError.business_size ? "border-red-500" : "border-white"
                } bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]`}
                value={inputs.business_size}
                onChange={(e) => handleInputChange(e, "business_size")}
              />
            </div>
          </div>

          <div className="w-full flex gap-x-6">
            <div className="w-1/2 mb-8">
              <div className="flex justify-between items-end mb-4">
                <p className="text-left font-medium text-gray-600 text-xs">Business Name</p>
                <small className="text-xs text-red-500">{inputsError.business_name}</small>
              </div>
              <input
                type="text"
                className={`rounded-xl border-2 ${
                  inputsError.business_name ? "border-red-500" : "border-white"
                } bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]`}
                value={inputs.business_name}
                onChange={(e) => handleInputChange(e, "business_name")}
              />
            </div>
            <div className="w-1/2 mb-8">
              <div className="flex justify-between items-end mb-4">
                <p className="text-left font-medium text-gray-600 text-xs">Business License Number</p>
                <small className="text-xs text-red-500">{inputsError.business_license_number}</small>
              </div>
              <input
                type="text"
                className={`rounded-xl border-2 ${
                  inputsError.business_license_number ? "border-red-500" : "border-white"
                } bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]`}
                value={inputs.business_license_number}
                onChange={(e) => handleInputChange(e, "business_license_number")}
              />
            </div>
          </div>

          <div className="w-full flex gap-x-6">
            <div className="w-3/4 mb-8">
              <div className="flex justify-between items-end mb-4">
                <p className="text-left font-medium text-gray-600 text-xs">Billing Address</p>
                <small className="text-xs text-red-500">{inputsError.billing_address_1}</small>
              </div>
              <AddressAutocomplete
                onSelect={(val) => handleAutoAddress("billing_address_1", val)}
                type="text"
                onChange={(e) => handleInputChange(e, "billing_address_1")}
                name={"billing_address_1"}
                defaultValue={inputs.billing_address_1}
                className={`rounded-xl border-2 bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00] ${
                  inputsError.billing_address_1.length > 0 ? "border-red-500" : "border-white"
                }`}
              />
            </div>
            <div className="w-1/4 flex-auto mb-8">
              <div className="flex justify-between items-end mb-4">
                <p className="text-left font-medium text-gray-600 text-xs">Unit / Suit</p>
                <small className="text-xs text-red-500">{inputsError.billing_address_2}</small>
              </div>
              <input
                type="text"
                className={`rounded-xl border-2 ${
                  inputsError.billing_address_2 ? "border-red-500" : "border-white"
                } bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]`}
                value={inputs.billing_address_2}
                onChange={(e) => handleInputChange(e, "billing_address_2")}
              />
            </div>
          </div>

          <div className="w-full flex gap-x-6">
            <div className="w-3/4 mb-8">
              <div className="flex justify-between items-end mb-4">
                <p className="text-left font-medium text-gray-600 text-xs">Mailing Address</p>
                <small className="text-xs text-red-500">{inputsError.mailing_address_1}</small>
              </div>
              <AddressAutocomplete
                onSelect={(val) => handleAutoAddress("mailing_address_1", val)}
                type="text"
                onChange={(e) => handleInputChange(e, "mailing_address_1")}
                name={"mailing_address_1"}
                defaultValue={inputs.mailing_address_1}
                className={`rounded-xl border-2 bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00] ${
                  inputsError.mailing_address_1.length > 0 ? "border-red-500" : "border-white"
                }`}
              />
            </div>
            <div className="w-1/4 flex-auto mb-8">
              <div className="flex justify-between items-end mb-4">
                <p className="text-left font-medium text-gray-600 text-xs">Unit / Suit</p>
                <small className="text-xs text-red-500">{inputsError.mailing_address_2}</small>
              </div>
              <input
                type="text"
                className={`rounded-xl border-2 ${
                  inputsError.mailing_address_2 ? "border-red-500" : "border-white"
                } bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]`}
                value={inputs.mailing_address_2}
                onChange={(e) => handleInputChange(e, "mailing_address_2")}
              />
            </div>
          </div>

          <div className="w-full flex gap-x-6 mb-6">
            <div className="w-1/2 mb-8">
              <div className="flex justify-between items-end mb-4">
                <p className="text-left font-medium text-gray-600 text-xs">Email Address</p>
                <small className="text-xs text-red-500">{inputsError.email}</small>
              </div>
              <input
                type="text"
                className={`rounded-xl border-2 ${
                  inputsError.email ? "border-red-500" : "border-white"
                } bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]`}
                value={inputs.email}
                onChange={(e) => handleInputChange(e, "email")}
              />
            </div>
            <div className="w-1/2 flex-auto mb-8">
              <div className="flex justify-between items-end mb-4">
                <p className="text-left font-medium text-gray-600 text-xs">Phone Number</p>
                <small className="text-xs text-red-500">{inputsError.phone}</small>
              </div>
              <input
                type="text"
                className={`rounded-xl border-2 ${
                  inputsError.phone ? "border-red-500" : "border-white"
                } bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]`}
                value={inputs.phone}
                onChange={(e) => handleInputChange(e, "phone")}
              />
            </div>
          </div>

          <button type="submit" className="block ml-auto pb-6 text-sm lg:text-lg font-semibold text-[#70E000] underline underline-offset-4 hover:no-underline">
            Register Your Business
          </button>
          <hr className="mb-6" />
          <div className="w-full">
            <p className="block w-full font-medium text-gray-600 text-[10px] lg:text-xs text-opacity-65">
              By registering your business you accept the following{" "}
              <Link href="/terms" className="underline hover:no-underline">
                terms and policies
              </Link>
              . By submitting this form you promise to the validity of your inputs.
            </p>
          </div>
        </form>
      )}
    </section>
  );
};

export default ProRegisterForm;