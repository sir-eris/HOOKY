"use client";

import Link from "next/link";
import { useState } from "react";

export default function Warranty() {
  const [isVisible, setIsVisible] = useState(true);
  const [inputs, setInputs] = useState({email: null, deviceID: null, purchaseDate: null, issue: null});

  const handleInputChange = (fieldName, value) => {
    setInputs((prev) => {
      let items = { ...prev };
      items[fieldName] = value;
      return items;
    })
  };

  const handleOnSubmit = () => {};

  return (
    <main>
      {isVisible ? (
        <>
          <section className="grid gird-rows-3 lg:grid-cols-3 lg:grid-rows-1 w-screen mb-16 pb-16 bg-[url('/.png')] bg-no-repeat bg-center bg-contain">
            <div className="w-full bg-[url('/18-l.png')] bg-no-repeat bg-center bg-contain animate__animated animate__fadeInLeft"></div>
            <div className="h-96 lg:h-[80vh] w-full grid grid-cols-1 grid-rows-3 text-center">
              <div></div>
              <h1 className="text-xl lg:text-3xl font-normal uppercase">
                <span className="block mb-2 lg:mb-5">One</span>{" "}
                <span className="block wb text-4xl lg:text-7xl mb-5 text-[#70E000] font-extrabold drop-shadow-xl">
                  User-Friendly
                </span>
                <span className="block">Experience</span>
              </h1>
              <div className="w-full flex flex-col justify-end items-center">
                <h2 className="text-xs lg:text-sm mb-8 px-12 lg:px-12">
                  A complete warranty process with shippings{" "}
                  <span className="font-semibold">to</span> and{" "}
                  <span className="font-semibold">from</span> us included.
                </h2>
              </div>
            </div>
            <div className="w-full bg-[url('/18-r.png')] bg-no-repeat bg-center bg-contain animate__animated animate__fadeInRight"></div>
          </section>

          <section className="w-screen mx-auto mb-16 pb-16 border-b">
            <div className="w-full lg:w-1/2 px-8 lg:pl-0 mx-auto">
              <h1 className="font-normal text-lg uppercase mb-4 text-center w-full">
                File A Claim
              </h1>
              <h2 className="mb-12 text-xs text-slate-600 font-medium">
                Enter your order information and select the issue you are
                encountering from the provided options. Upon submitting your
                claim, a member of our team will contact you to guide you
                through the next steps. If the specific issue you are
                experiencing is not listed, select the option that most closely
                aligns with your situation. Be advised that if your issue falls
                outside the coverage provided by your current policies, you may
                purchase a new policy with instant activation at any time. By
                filing a claim you accept the following{" "}
                <Link href="/terms" className="underline hover:no-underline">
                  terms and policies
                </Link>
                .
              </h2>

              <div className="w-full lg:flex justify-start items-center gap-x-6 mb-12">
                <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                  <p className="w-full text-left font-medium text-gray-600 text-xs mb-4">
                    Email associated with order
                  </p>
                  <input
                    type="text"
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    value={inputs["email"]}
                    className="rounded-xl border-2 border-white bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <p className="w-full text-left font-medium text-gray-600 text-xs mb-4">
                    Device ID
                  </p>
                  <input
                    type="text"
                    onChange={(e) =>
                      handleInputChange("deviceID", e.target.value)
                    }
                    value={inputs["deviceID"]}
                    className="rounded-xl border-2 border-white bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]"
                  />
                </div>
              </div>

              <div className="w-full mb-12">
                <p className="w-full text-left font-medium text-gray-600 text-xs mb-4">
                  Purchase Date
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-3 justify-start items-center">
                  <div className="checkbox-wrapper-16">
                    <label className="checkbox-wrapper">
                      <input
                        onChange={(e) => handleInputChange("purchaseDate", 30)}
                        type="checkbox"
                        className="checkbox-input absolute w-0 h-0 overflow-hidden whitespace-nowrap"
                      />
                      <span
                        className={`checkbox-tile relative cursor-pointer rounded-full border-2 drop-shadow-sm py-1 px-5 text-xs bg-[#FFFFFF] ${
                          inputs["purchaseDate"] == 30
                            ? `outline outline-[3px] outline-[#70e000]`
                            : ``
                        }`}
                      >
                        <span className="checkbox-label text-center text-xs font-medium transition-colors">
                          Within past 30 days
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="checkbox-wrapper-16">
                    <label className="checkbox-wrapper">
                      <input
                        onChange={(e) => handleInputChange("purchaseDate", 90)}
                        type="checkbox"
                        className="checkbox-input absolute w-0 h-0 overflow-hidden whitespace-nowrap"
                      />
                      <span
                        className={`checkbox-tile relative cursor-pointer rounded-full border-2 drop-shadow-sm py-1 px-5 text-xs bg-[#FFFFFF] ${
                          inputs["purchaseDate"] == 90
                            ? `outline outline-[3px] outline-[#70e000]`
                            : ``
                        }`}
                      >
                        <span className="checkbox-label text-center text-xs font-medium transition-colors">
                          Within past 90 days
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="checkbox-wrapper-16">
                    <label className="checkbox-wrapper">
                      <input
                        onChange={(e) => handleInputChange("purchaseDate", 365)}
                        type="checkbox"
                        className="checkbox-input absolute w-0 h-0 overflow-hidden whitespace-nowrap"
                      />
                      <span
                        className={`checkbox-tile relative cursor-pointer rounded-full border-2 drop-shadow-sm py-1 px-5 text-xs bg-[#FFFFFF] ${
                          inputs["purchaseDate"] == 365
                            ? `outline outline-[3px] outline-[#70e000]`
                            : ``
                        }`}
                      >
                        <span className="checkbox-label text-center text-xs font-medium transition-colors">
                          Within past 365 days
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="checkbox-wrapper-16">
                    <label className="checkbox-wrapper">
                      <input
                        onChange={(e) => handleInputChange("purchaseDate", 366)}
                        type="checkbox"
                        className="checkbox-input absolute w-0 h-0 overflow-hidden whitespace-nowrap"
                      />
                      <span
                        className={`checkbox-tile relative cursor-pointer rounded-full border-2 drop-shadow-sm py-1 px-5 text-xs bg-[#FFFFFF] ${
                          inputs["purchaseDate"] == 366
                            ? `outline outline-[3px] outline-[#70e000]`
                            : ``
                        }`}
                      >
                        <span className="checkbox-label text-center text-xs font-medium transition-colors">
                          Over 1 year ago
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="w-full mb-12">
                <p className="w-full text-left font-medium text-gray-600 text-xs mb-4">
                  Experiencing issue
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-3 justify-start items-center mb-8">
                  <div className="checkbox-wrapper-16">
                    <label className="checkbox-wrapper">
                      <input
                        onChange={(e) => handleInputChange("issue", "Air Hose")}
                        type="checkbox"
                        className="checkbox-input absolute w-0 h-0 overflow-hidden whitespace-nowrap"
                      />
                      <span
                        className={`checkbox-tile relative cursor-pointer rounded-full border-2 drop-shadow-sm py-1 px-5 text-xs bg-[#FFFFFF] ${
                          inputs["issue"] == "Air Hose"
                            ? `outline outline-[3px] outline-[#70e000]`
                            : ``
                        }`}
                      >
                        <span className="checkbox-label text-center text-xs font-medium transition-colors">
                          Air Hose
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="checkbox-wrapper-16">
                    <label className="checkbox-wrapper">
                      <input
                        onChange={(e) =>
                          handleInputChange("issue", "Touch System")
                        }
                        type="checkbox"
                        className="checkbox-input absolute w-0 h-0 overflow-hidden whitespace-nowrap"
                      />
                      <span
                        className={`checkbox-tile relative cursor-pointer rounded-full border-2 drop-shadow-sm py-1 px-5 text-xs bg-[#FFFFFF] ${
                          inputs["issue"] == "Touch System"
                            ? `outline outline-[3px] outline-[#70e000]`
                            : ``
                        }`}
                      >
                        <span className="checkbox-label text-center text-xs font-medium transition-colors">
                          Touch System / Light Bar
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="checkbox-wrapper-16">
                    <label className="checkbox-wrapper">
                      <input
                        onChange={(e) => handleInputChange("issue", "Damper")}
                        type="checkbox"
                        className="checkbox-input absolute w-0 h-0 overflow-hidden whitespace-nowrap"
                      />
                      <span
                        className={`checkbox-tile relative cursor-pointer rounded-full border-2 drop-shadow-sm py-1 px-5 text-xs bg-[#FFFFFF] ${
                          inputs["issue"] == "Damper"
                            ? `outline outline-[3px] outline-[#70e000]`
                            : ``
                        }`}
                      >
                        <span className="checkbox-label text-center text-xs font-medium transition-colors">
                          Damper
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="checkbox-wrapper-16">
                    <label className="checkbox-wrapper">
                      <input
                        onChange={(e) => handleInputChange("issue", "Tray")}
                        type="checkbox"
                        className="checkbox-input absolute w-0 h-0 overflow-hidden whitespace-nowrap"
                      />
                      <span
                        className={`checkbox-tile relative cursor-pointer rounded-full border-2 drop-shadow-sm py-1 px-5 text-xs bg-[#FFFFFF] ${
                          inputs["issue"] == "Tray"
                            ? `outline outline-[3px] outline-[#70e000]`
                            : ``
                        }`}
                      >
                        <span className="checkbox-label text-center text-xs font-medium transition-colors">
                          Tray
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="checkbox-wrapper-16">
                    <label className="checkbox-wrapper">
                      <input
                        onChange={(e) => handleInputChange("issue", "Charging")}
                        type="checkbox"
                        className="checkbox-input absolute w-0 h-0 overflow-hidden whitespace-nowrap"
                      />
                      <span
                        className={`checkbox-tile relative cursor-pointer rounded-full border-2 drop-shadow-sm py-1 px-5 text-xs bg-[#FFFFFF] ${
                          inputs["issue"] == "Charging"
                            ? `outline outline-[3px] outline-[#70e000]`
                            : ``
                        }`}
                      >
                        <span className="checkbox-label text-center text-xs font-medium transition-colors">
                          Charging
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="checkbox-wrapper-16">
                    <label className="checkbox-wrapper">
                      <input
                        onChange={(e) => handleInputChange("issue", "Other")}
                        type="checkbox"
                        className="checkbox-input absolute w-0 h-0 overflow-hidden whitespace-nowrap"
                      />
                      <span
                        className={`checkbox-tile relative cursor-pointer rounded-full border-2 drop-shadow-sm py-1 px-5 text-xs bg-[#FFFFFF] ${
                          inputs["issue"] == "Other"
                            ? `outline outline-[3px] outline-[#70e000]`
                            : ``
                        }`}
                      >
                        <span className="checkbox-label text-center text-xs font-medium transition-colors">
                          Other
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <p className="text-right font-semibold text-sx lg:text-lg text-gray-400 underline-offset-2 underline">
                PRO Members Only.
              </p>
            </div>

            {/* <div className="w-full px-12 mb-12">
      <h1 className="font-normal text-lg uppercase mb-4 text-center w-full">
        Buy A Policy
      </h1>
      <h2 className="mb-12 text-xs text-slate-600 font-medium">
        Input your order information and select the desired insurance
        or warranty policies you wish to purchase. It is imperative that you
        carefully review the terms and conditions associated with purchasing
        a policy before proceeding. Unless explicitly stated otherwise, each
        policy will be activated <b>immediately</b> upon the successful
        completion of the purchase and will remain in effect for{" "}
        <b>365 days</b> thereafter. Upon purchase, you will receive an email
        confirmation containing a copy of all policies acquired from your
        purchase. All purchased policies will be linked to the Product ID
        assigned to the respective device. Policies are non-refundable. By
        tapping <i>Checkout</i> you accept the following{" "}
        <Link href="/terms" className="underline hover:no-underline">
          terms and policies
        </Link>
        .
      </h2>

      <div className="w-full flex justify-start items-center gap-x-6 mb-12">
        <div className="w-1/2">
          <p className="w-full text-left font-medium text-gray-600 text-xs mb-4">
            Email associated with order
          </p>
          <input
            type="email"
            className="rounded-xl border-2 border-white bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]"
          />
        </div>
        <div className="w-1/2">
          <p className="w-full text-left font-medium text-gray-600 text-xs mb-4">
            Device ID
          </p>
          <input
            type="text"
            className="rounded-xl border-2 border-white bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]"
          />
        </div>
      </div>

      <div className="w-full mb-12">
        <p className="w-full text-left font-medium text-gray-600 text-xs mb-4">
          Select policy
        </p>
        <div className="flex flex-wrap gap-x-3 gap-y-3 justify-start items-center mb-8">
          <div className="checkbox-wrapper-16">
            <label className="checkbox-wrapper">
              <input
                type="checkbox"
                className="checkbox-input absolute w-0 h-0 overflow-hidden whitespace-nowrap"
              />
              <span className="checkbox-tile relative cursor-pointer rounded-full border-2 drop-shadow-sm py-1 px-5 text-xs bg-[#FFFFFF]">
                <span className="checkbox-label text-center text-xs font-medium transition-colors">
                  Additional 365-day policy for $29.99
                </span>
              </span>
            </label>
          </div>
          <div className="checkbox-wrapper-16">
            <label className="checkbox-wrapper">
              <input
                type="checkbox"
                className="checkbox-input absolute w-0 h-0 overflow-hidden whitespace-nowrap"
              />
              <span className="checkbox-tile relative cursor-pointer rounded-full border-2 drop-shadow-sm py-1 px-5 text-xs bg-[#FFFFFF]">
                <span className="checkbox-label text-center text-xs font-medium transition-colors">
                  Battery replacement for $49.99
                </span>
              </span>
            </label>
          </div>
          <div className="checkbox-wrapper-16">
            <label className="checkbox-wrapper">
              <input
                type="checkbox"
                className="checkbox-input absolute w-0 h-0 overflow-hidden whitespace-nowrap"
              />
              <span className="checkbox-tile relative cursor-pointer rounded-full border-2 drop-shadow-sm py-1 px-5 text-xs bg-[#FFFFFF]">
                <span className="checkbox-label text-center text-xs font-medium transition-colors">
                  Surface refinishing for $39.99
                </span>
              </span>
            </label>
          </div>
          <div className="checkbox-wrapper-16">
            <label className="checkbox-wrapper">
              <input
                type="checkbox"
                className="checkbox-input absolute w-0 h-0 overflow-hidden whitespace-nowrap"
              />
              <span className="checkbox-tile relative cursor-pointer rounded-full border-2 drop-shadow-sm py-1 px-5 text-xs bg-[#FFFFFF]">
                <span className="checkbox-label text-center text-xs font-medium transition-colors">
                  Heating Element replacement for $19.99
                </span>
              </span>
            </label>
          </div>
          <div className="checkbox-wrapper-16">
            <label className="checkbox-wrapper">
              <input
                type="checkbox"
                className="checkbox-input absolute w-0 h-0 overflow-hidden whitespace-nowrap"
              />
              <span className="checkbox-tile relative cursor-pointer rounded-full border-2 drop-shadow-sm py-1 px-5 text-xs bg-[#FFFFFF]">
                <span className="checkbox-label text-center text-xs font-medium transition-colors">
                  Damper replacement for $19.99
                </span>
              </span>
            </label>
          </div>
          <div className="checkbox-wrapper-16">
            <label className="checkbox-wrapper">
              <input
                type="checkbox"
                className="checkbox-input absolute w-0 h-0 overflow-hidden whitespace-nowrap"
              />
              <span className="checkbox-tile relative cursor-pointer rounded-full border-2 drop-shadow-sm py-1 px-5 text-xs bg-[#FFFFFF]">
                <span className="checkbox-label text-center text-xs font-medium transition-colors">
                  Tray replacement for $9.99
                </span>
              </span>
            </label>
          </div>
          <div className="checkbox-wrapper-16">
            <label className="checkbox-wrapper">
              <input
                type="checkbox"
                className="checkbox-input absolute w-0 h-0 overflow-hidden whitespace-nowrap"
              />
              <span className="checkbox-tile relative cursor-pointer rounded-full border-2 drop-shadow-sm py-1 px-5 text-xs bg-[#FFFFFF]">
                <span className="checkbox-label text-center text-xs font-medium transition-colors">
                  90-day return policy for $4.99
                </span>
              </span>
            </label>
          </div>
        </div>
      </div>
      <button className="block text-lg ml-auto font-semibold text-[#70E000] underline underline-offset-4 hover:no-underline">
        Checkout
      </button>
    </div> */}
          </section>

          <section className="w-screen pb-16">
            <div className="w-full lg:w-1/2 px-8 lg:pl-0 mx-auto text-center">
              <h5 className="mb-4">
                1. Granted no marks of intentional or accidental damage -
                Included free 30-day return policy with full refund and return
                shipping.
              </h5>
              <p className="text-xs text-gray-600 font-medium mb-12 hyphens-auto">
                Under this policy, the purchaser is entitled to a free 30-day
                return period, during which they may return the purchased item
                for a full refund, including the cost of return shipping,
                provided certain conditions are met. Specifically, the item must
                be returned without any signs of intentional or accidental
                damage. "Intentional damage" refers to any harm caused to the
                item deliberately by the purchaser or any other party acting on
                their behalf. "Accidental damage" refers to any harm caused
                unintentionally but due to negligence or mishandling by the
                purchaser. The item must be in the same condition as when it was
                originally received by the purchaser, without any visible or
                functional alterations or impairments that were not present at
                the time of purchase. If these conditions are satisfied, the
                purchaser will receive a full refund, and the seller will cover
                the cost of return shipping. Failure to comply with these
                conditions may result in the denial of the refund or the
                imposition of additional fees to cover any damage incurred.
              </p>
              <h5 className="mb-4">
                2. Granted no marks of intentional or accidental damage -
                Included 365 days part replacement coverage on electronic
                failures*, mechanical failures**, leaks, and other internal
                malfunction.
              </h5>
              <p className="text-xs text-gray-600 font-medium hyphens-auto">
                Under this policy, the purchaser is provided with a 365-day
                coverage period during which specific types of failures and
                malfunctions in the product are eligible for part replacement,
                provided the item shows no marks of intentional or accidental
                damage. Coverage includes electronic failures, mechanical
                failures, leaks, and other internal malfunctions, all of which
                must be unrelated to any external or cosmetic damage.
                "Electronic failures" refer to issues within the product’s
                electronic components that prevent proper functioning, excluding
                any failure of the battery, which is not covered under this
                policy. "Mechanical failures" refer to breakdowns or
                malfunctions in the product's internal mechanical components,
                excluding damage caused to external parts or surfaces.
                "Intentional damage" means harm deliberately caused by the
                purchaser or someone acting on their behalf, while "accidental
                damage" refers to harm resulting from unintended actions or
                negligence. Coverage will only apply if the item is free of such
                damages. Should any of these covered issues occur within the
                365-day period, and provided the item meets the outlined
                conditions, the necessary parts will be replaced at no cost to
                the purchaser. However, any damage falling outside the specified
                covered failures, including *battery and **external damage, will
                not be eligible for replacement under this policy. This policy
                also requires the purchaser to activate coverage by using their
                warranty code on the seller's website. To initiate a claim, the
                purchaser must enter the warranty code, complete the necessary
                form detailing the nature of the failure or malfunction, and
                then await a response from the seller. If the warranty claim is
                accepted, the purchaser will be instructed to return the
                product. The product must be sent back in its original packaging
                and include all original parts that accompanied the purchase
                excluding any complimentary flavors including in the original
                purchase. The seller will cover the cost of shipping both from
                the purchaser to the seller and the return of the repaired or
                replaced product back to the purchaser. Failure to return the
                product in its original packaging or with all original parts may
                result in the denial of the warranty claim or additional
                charges. The policy remains subject to the conditions previously
                stated, including the exclusion of any damage caused by the
                purchaser, whether intentional or accidental.
              </p>
            </div>
          </section>
        </>
      ) : (
        <section className="min-h-screen w-screen flex items-center py-16 bg-[url('/.png')] bg-no-repeat bg-center bg-contain">
          <div className="min-h-96 w-full lg:w-1/3 mx-auto flex flex-col justify-start items-center py-8 px-12">
            <h1 className="font-normal text-[14pt] uppercase mb-4 text-center w-full">
              Warranty Claim Confirmation
            </h1>
            <h2 className="text-[10pt] text-slate-600 font-medium mb-8">
              We will review your submission and reach out to you with further
              information. You will receive an email with a summary of your
              submission. If your device is behaving abnormally, set it aside
              and don't use it until our instructions.
            </h2>
          <div className="w-full">
            <Link
            href="/"
              className="block w-fit ml-auto text-nowrap text-lg font-semibold text-[#70E000] underline underline-offset-4 hover:no-underline"
            >
              Continue To Home
            </Link>
          </div>
          </div>
        </section>
      )}
    </main>
  );
}
