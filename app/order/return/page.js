"use client";

import Link from "next/link";
import { useState } from "react";

const metadata = {
  title: "Order - Start Return",
  description: "A smooth online shopping process.",
};

export default function StartReturn() {
  const [isVisible, setIsVisible] = useState(true); // State to track visibility

  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle the state
  };

  return (
    <main>
      {isVisible ? (
        <section className="min-h-screen w-screen flex items-center py-16 bg-[url('/.png')] bg-no-repeat bg-center bg-contain">
          <div className="min-h-96 w-1/3 mx-auto flex flex-col justify-start items-center py-8 px-12">
            <h1 className="font-normal text-[14pt] uppercase mb-4 text-center w-full">
              Start A Free Return
            </h1>
            <h2 className="mb-12 text-[10pt] text-slate-600 font-medium">
              To initiate a return, complete the form below with your order
              information. Once submitted, you’ll receive an email with
              instructions on how to proceed with your return.{" "}
              <Link href="/terms" className="underline hover:no-underline">
                Terms and policies
              </Link>{" "}
              apply.
            </h2>

            <div className="w-full mb-8">
              <p className="w-full text-left font-medium text-gray-600 text-xs mb-4">
                Email associated with order
              </p>
              <input
                type="email"
                className="rounded-xl border-2 border-white bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]"
                placeholder=""
              />
            </div>
            <div className="w-full flex justify-start items-center gap-x-6 mb-8">
              <div className="w-1/2">
                <p className="w-full text-left font-medium text-gray-600 text-xs mb-4">
                  Order number
                </p>
                <input
                  type="email"
                  className="rounded-xl border-2 border-white bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]"
                  placeholder=""
                />
              </div>
              <div className="w-1/2">
                <p className="w-full text-left font-medium text-gray-600 text-xs mb-4">
                  Device ID
                </p>
                <input
                  type="text"
                  className="rounded-xl border-2 border-white bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]"
                  placeholder="A7FH395H"
                />
              </div>
            </div>
            <div className="w-full mb-8">
              <p className="w-full text-left font-medium text-gray-600 text-xs mb-4">
                Reason for return
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-3 justify-start items-center">
                <div className="checkbox-wrapper-16">
                  <label className="checkbox-wrapper">
                    <input
                      type="checkbox"
                      className="checkbox-input absolute w-0 h-0 overflow-hidden whitespace-nowrap"
                    />
                    <span className="checkbox-tile relative cursor-pointer rounded-full border-2 drop-shadow-sm py-1 px-5 text-xs bg-[#FFFFFF]">
                      <span className="checkbox-label text-center text-xs font-medium transition-colors">
                        Smoke
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
                        Battery
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
                        Size
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
                        Tray
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
                        Filter
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
                        Other
                      </span>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <button
              onClick={toggleVisibility}
              className="text-lg ml-auto font-semibold text-[#70E000] underline underline-offset-4 hover:no-underline"
            >
              Start Return
            </button>
          </div>
        </section>
      ) : (
        <section className="min-h-screen w-screen flex items-center py-16 bg-[url('/.png')] bg-no-repeat bg-center bg-contain">
          <div className="min-h-96 w-1/3 mx-auto flex flex-col justify-start items-center py-8 px-12">
            <h1 className="font-normal text-[14pt] uppercase mb-4 text-center w-full">
              Return Request Confirmation.
            </h1>
            <h2 className="mb-8 text-[10pt] text-slate-600 font-medium">
              You will receive an email with a summary of your submission along
              with instructions on how to proceed with your return. You can also
              follow the status of your order until your return is completed.
            </h2>
            <Link
              href="/order/status"
              className="text-lg ml-auto font-semibold text-[#70E000] underline underline-offset-4 hover:no-underline"
            >
              Order Status
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
