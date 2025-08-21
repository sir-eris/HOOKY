import Link from "next/link";
// import { useState } from "react";

export const metadata = {
  title: "Contact Us",
  description: "Send us a message and we will be right with you.",
};

// async function sendMessage({ inputs }) {
//   const response = await fetch(`/api/contact`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ ...inputs }),
//   });

//   const data = await response.json();

//   if (data.redirected) {
//     window.location.href = data.url;
//     return false;
//   }
//   if (data.ok) {
//     return true;
//   }
//   return false;
// }

export default function Contact() {
  // const [messageSent, setMessageSent] = useState(false);
  // const [messageSubmitError, setMessageSubmitError] = useState(false);
  // const [formData, setFormData] = useState({
  //   f_name: "",
  //   l_name: "",
  //   email: "",
  //   phone: "",
  //   topic: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleMessageSubmit = async (e) => {
  //   e.preventDefault();
  //   // TODO: filters
    
  //   const response = await sendMessage({
  //     f_name: formData.f_name,
  //     l_name: formData.l_name,
  //     email: formData.email,
  //     phone: formData.phone,
  //     topic: formData.topic,
  //     message: formData.message
  //   });

  //   if (response) {
  //     setMessageSent(true);
  //   } else {
  //     setMessageSubmitError(
  //       "There was an issue when submitting your message. Please refresh the page and try again."
  //     );
  //   }
  // }

  
  return (
    <main className="pt-12">
      {/* {!messageSent ? ( */}
      <section className="min-h-screen w-screen flex flex-col justify-between items-center bg-[url('/.png')] bg-no-repeat bg-center bg-contain pb-16">
        <div className="w-full lg:w-1/3 mx-auto"></div>
        <div className="w-full lg:w-1/3 mx-auto text-center py-8 px-12 flex flex-col justify-start items-center mb-24">
          <h1 className="font-normal text-[14pt] lg:text-lg uppercase mb-4 text-center w-full">
            Who. What. Why.
          </h1>
          <div className="">
            <h2 className="text-xs lg:text-sm">
              We strive to take use of technology to transform primitive rituals
              into modern experiences. We thoroughly engineer each step until an
              optimum is reached. This way we can ensure extreme ease-of use by
              eliminating monkey works.
            </h2>
            {/* <Link
              href="/contact"
              className="text-xs underline text-gray-600 hover:no-underline"
            >
              Feedback
            </Link> */}
          </div>
        </div>
        <div className="w-full lg:w-1/3 mx-auto flex flex-col justify-start items-center py-8 px-12">
          {/* <small className="block w-full h-4 mb-12 text-center text-red-500 underline underline-offset-2">
              {messageSubmitError}
            </small> */}
          {/* <h1 className="font-normal text-[14pt] lg:text-lg uppercase mb-4 text-center w-full">
            Contact Us
          </h1>
          <h2 className="mb-12 text-[10pt] text-slate-600 font-medium">
            Send us an email to our{" "}
            <Link
              href="mailto:support@buyhooky.com"
              className="font-semibold underline underline-offset-2 hover:no-underline text-[#70E000]"
            >
              Support Team
            </Link>{" "}
            and include as much detail as you can. We will review and respond
            appropriately within 72 working hours. (support@buyhooky.com)
          </h2> */}
          <Link
            href="mailto:support@buyhooky.com"
            className="block w-fit mx-auto"
          >
            <p className="underline underline-offset-4 mb-4 hover:no-underline">
              support@buyhooky.com
            </p>
          </Link>
          <p className="text-center font-medium text-gray-600 text-[7pt] lg:text-xs text-opacity-65">
            Send an email to our Support Team and include as much detail as you
            can. We will review and respond appropriately within 72 working
            hours. (support@buyhooky.com)
          </p>
        </div>

        {/* <form
            // onSubmit={handleMessageSubmit}
            className="min-h-96 w-1/3 mx-auto flex flex-col justify-start items-center py-8 px-12"
          >
            <div className="w-full flex justify-start items-center gap-x-6 mb-8">
              <div className="w-1/2">
                <p className="w-full text-left font-medium text-gray-600 text-xs mb-4">
                  First name
                </p>
                <input
                  type="text"
                  name="f_name"
                  className="rounded-xl border-2 border-white bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]"
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2">
                <p className="w-full text-left font-medium text-gray-600 text-xs mb-4">
                  Last name
                </p>
                <input
                  type="text"
                  name="l_name"
                  className="rounded-xl border-2 border-white bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full mb-8">
              <p className="w-full text-left font-medium text-gray-600 text-xs mb-4">
                Email address
              </p>
              <input
                type="text"
                name="email"
                className="rounded-xl border-2 border-white bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]"
                onChange={handleChange}
              />
            </div>
            <div className="w-full mb-8">
              <p className="w-full text-left font-medium text-gray-600 text-xs mb-4">
                Phone number
              </p>
              <input
                type="text"
                name="phone"
                className="rounded-xl border-2 border-white bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]"
                onChange={handleChange}
              />
            </div>
            <div className="w-full mb-8">
              <p className="w-full text-left font-medium text-gray-600 text-xs mb-4">
                Topic
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-3 justify-start items-center">
                <div className="checkbox-wrapper-16">
                  <label className="checkbox-wrapper">
                    <input
                      type="checkbox"
                      name="topic"
                      className="checkbox-input absolute w-0 h-0 overflow-hidden whitespace-nowrap"
                      onChange={handleChange}
                    />
                    <span className="checkbox-tile relative cursor-pointer rounded-full border-2 drop-shadow-sm py-1 px-5 text-xs bg-[#FFFFFF]">
                      <span className="checkbox-label text-center text-xs font-medium transition-colors">
                        Device
                      </span>
                    </span>
                  </label>
                </div>
                <div className="checkbox-wrapper-16">
                  <label className="checkbox-wrapper">
                    <input
                      type="checkbox"
                      name="topic"
                      className="checkbox-input absolute w-0 h-0 overflow-hidden whitespace-nowrap"
                      onChange={handleChange}
                    />
                    <span className="checkbox-tile relative cursor-pointer rounded-full border-2 drop-shadow-sm py-1 px-5 text-xs bg-[#FFFFFF]">
                      <span className="checkbox-label text-center text-xs font-medium transition-colors">
                        Shipping
                      </span>
                    </span>
                  </label>
                </div>
                <div className="checkbox-wrapper-16">
                  <label className="checkbox-wrapper">
                    <input
                      type="checkbox"
                      name="topic"
                      className="checkbox-input absolute w-0 h-0 overflow-hidden whitespace-nowrap"
                      onChange={handleChange}
                    />
                    <span className="checkbox-tile relative cursor-pointer rounded-full border-2 drop-shadow-sm py-1 px-5 text-xs bg-[#FFFFFF]">
                      <span className="checkbox-label text-center text-xs font-medium transition-colors">
                        Feedback
                      </span>
                    </span>
                  </label>
                </div>
                <div className="checkbox-wrapper-16">
                  <label className="checkbox-wrapper">
                    <input
                      type="checkbox"
                      name="topic"
                      className="checkbox-input absolute w-0 h-0 overflow-hidden whitespace-nowrap"
                      onChange={handleChange}
                    />
                    <span className="checkbox-tile relative cursor-pointer rounded-full border-2 drop-shadow-sm py-1 px-5 text-xs bg-[#FFFFFF]">
                      <span className="checkbox-label text-center text-xs font-medium transition-colors">
                        Collaboration
                      </span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full mb-8">
              <p className="w-full text-left font-medium text-gray-600 text-xs mb-4">
                Message
              </p>
              <textarea
                rows={4}
                type="text"
                name="message"
                className="rounded-xl resize-none border-2 border-white bg-white px-4 py-2 font-medium w-full basis-full outline outline-slate-300 text-sm placeholder:text-xs focus:border-[#89FC00]"
                placeholder="How can we help?"
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="text-lg ml-auto font-semibold text-[#70E000] underline underline-offset-4 hover:no-underline"
            >
              Send Message
            </button>
          </form> */}
      </section>
      {/* ) : (
        <section className="min-h-screen w-screen flex items-center py-16 bg-[url('/.png')] bg-no-repeat bg-center bg-contain">
          <div className="min-h-96 w-1/3 mx-auto flex flex-col justify-start items-center py-8 px-12">
            <h1 className="font-normal text-[14pt] uppercase mb-4 text-center w-full">
              Thank You for Contacting Us.
            </h1>
            <h2 className="text-[10pt] text-slate-600 font-medium">
              We have received your request and will carefully review all the
              details provided. Our team is committed to addressing your
              concerns thoroughly. You can expect a response from us as soon as
              possible.
            </h2>
          </div>
        </section>
      )} */}
    </main>
  );
}
