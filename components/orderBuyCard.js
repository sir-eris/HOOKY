"use client";

import Link from "next/link";
import Image from "next/image";
import {  useState, useRef } from "react";
import { useCart } from "../contexts/CartContext";
import { CirclePlay, ChevronLeft, ChevronRight } from "lucide-react";

// import { loadStripe } from "@stripe/stripe-js";
// const stripePromise = loadStripe(
//   "pk_test_51Qj9MpChMScoUAyjBAXxV2kq4IhURds8c5vCqncvXL9dOFMIFXT6NwmE7zXiXu1KQI8KipYn75ZeeSir3cGgyKHf00JWgvpbw5"
// );

// async function stripeCheckout(item) {
//   const response = await fetch("/api/order/checkout", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({...item}),
//   });
//   const data = await response.json();
//   window.location.href = data.url;
// }

export function OrderBuyCard({ item, checkOutOptions, models, countOptions }) {
  const { addToCart, addReserve } = useCart();
  const [checkOutCount, setCheckOutCount] = useState(countOptions);
  const [selectedCheckOutOption, setSelectedCheckOutOption] = useState(checkOutOptions);
  const [selectedModel, setSelectedModel] = useState(models.filter((item) => item.is_default == true)[0].id);
  const [media, setMedia] = useState(models.filter(item => item.is_default == true)[0].media);
  const [video, setVideo] = useState([...Array(media.filter((item) => item.type == "video").length).fill(false)]);
  // const [checkoutError, setCheckoutError] = useState("");
  // const [itemAddedToCart, setItemAddedToCart] = useState(false);
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  const touchStartX = useRef(null);
  const touchMoved = useRef(false);

  const next = () => {
    setCurrent((prev) => (prev + 1) % media.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + media.length) % media.length);
  };

  const goTo = (index) => setCurrent(index);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchMoved.current = false;
  };

  const handleTouchMove = (e) => {
    touchMoved.current = true;
  };

  const handleTouchEnd = (e) => {
    if (!touchMoved.current) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      next();
    } else if (diff < -50) {
      prev();
    }

    touchMoved.current = false;
  };

  const handleCheckOutCount = (id) => {
    setCheckOutCount((prev) => {
      const options = [...prev];
      return options.map((item) => ({
        ...item,
        selected: item.id === id,
      }));
    });
  };

  const handleSelectCheckOutOption = (id) => {
    setSelectedCheckOutOption((items) => {
      const options = [...items];
      let option = options[id];
      let toggled = { ...option, selected: !option.selected };
      options[id] = toggled;
      return options;
    });
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: Math.random(),
      title: item.title,
      price: item.price,
      type: item.type,
      url: item.url,
      count: checkOutCount.filter((item, _) => item.selected)[0]?.count || item.countStep,
      countStep: item.countStep,
      model: models[selectedModel].title,
      checkOutOptions: selectedCheckOutOption.filter((item) => item.selected),
    };

    addToCart(cartItem);
  };

  const selectModel = (i) => {
    setSelectedModel(i);
    setMedia(models[i].media);
  };

  const handleVideo = (i) => {
    setVideo((prev) => {
      prev[i] = true;
      return [...prev];
    });
  };

  // const handleQuickCheckOut = () => {
  //   const _item = {
  //     id: Math.random(),
  //     title: item.title,
  //     price: item.price,
  //     type: item.type,
  //     url: item.url,
  //     count: checkOutCount.filter((item, _) => item.selected)[0]?.count || 1,
  //     model: models[selectedModel].title,
  //     checkOutOptions: selectedCheckOutOption.filter((item) => item.selected),
  //     createdAt: Date.now(),
  //   };
  //   addReserve(_item);
  //   window.location = "/order/checkout";
  // };

  return (
    <section className="text-center w-screen mb-16 pt-24">
      <div className="w-full">
        {/* <small className="absolute w-fit mx-auto pt-18 text-red-500 font-semibold">
          {checkoutError}
        </small> */}
        <div className="relative self-start w-screen flex flex-col lg:flex-row gap-x-12 pr-0 lg:px-12 xl:px-24 2xl:px-40 text-left">
          <div className="w-full px-6 lg:px-0 lg:w-2/3 min-h-96">
            {media.map((med, index) => (
              <div
                key={"MEDIA_" + index}
                className="hidden lg:flex relative justify-center items-center rounded-xl bg-gray-50/50 border h-[350px] lg:h-[800px] slide mb-6 overflow-hidden"
              >
                {med.type == "image" && <Image src={med.src} quality={100} fill priority />}
                {med.type == "video" && (
                  <>
                    {!video[index] && (
                      <button onClick={() => handleVideo(index)} className="absolute w-full h-full flex flex-col justify-center items-center z-10">
                        <CirclePlay strokeWidth={0.75} size={96} className="hover:stroke-[#70e000]" />
                      </button>
                    )}
                    <video
                      controls={video[index] || false}
                      // autoPlay
                      muted
                      loop
                      className="block w-full h-full"
                    >
                      <source src={med.src} type="video/mp4" />
                      Your browser does not support this video.
                    </video>
                  </>
                )}
              </div>
            ))}
            <div className="block lg:hidden group relative mx-auto w-full overflow-hidden mb-4 pb-6 lg:mb-0">
              <div
                className="slider-wrapper"
                ref={sliderRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{
                  transform: `translateX(-${current * 100}%)`,
                }}
              >
                {media.map((med, index) => (
                  <div
                    key={"MEDIA_" + index}
                    className="lg:flex relative justify-center items-center rounded-xl bg-gray-50/50 border h-[350px] lg:h-[800px] slide mb-6 overflow-hidden"
                  >
                    {med.type == "image" && <Image src={med.src} quality={100} fill priority alt="" />}
                    {med.type == "video" && (
                      <>
                        {!video[index] && (
                          <button onClick={() => handleVideo(index)} className="absolute w-full h-full flex flex-col justify-center items-center z-10">
                            <CirclePlay strokeWidth={0.75} size={96} className="hover:stroke-[#70e000]" />
                          </button>
                        )}
                        <video
                          controls={video[index] || false}
                          // autoPlay
                          muted
                          loop
                          className="block w-full h-full"
                        >
                          <source src={med.src} type="video/mp4" />
                          Your browser does not support this video.
                        </video>
                      </>
                    )}
                  </div>
                ))}
              </div>

              <div className="absolute w-full left-0 bottom-0 flex justify-between items-center transition-opacity duration-300">
                <button
                  onClick={() => prev()}
                  className="w-8 h-8 mb-2 bg-white border-4 border-white hover:border-gray-200  hover:shadow-md rounded-full z-20 flex justify-center items-center transition-all opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="mr-[2px]" />
                </button>
                <div className="indicators mb-2">
                  {media.map((y, i) => (
                    <button key={i} className={`${i === current ? `active` : ``}`} onClick={() => goTo(i)} />
                  ))}
                </div>
                <button
                  onClick={() => next()}
                  className="w-8 h-8 mb-2 bg-white border-4 border-white hover:border-gray-200 hover:shadow-md rounded-full z-20 flex justify-center items-center transition-all opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="ml-[2px]" />
                </button>
              </div>
            </div>
          </div>

          <div className="sticky min-h-[calc(100vh-96px)] lg:h-fit lg:top-24 w-full px-6 pb-6 lg:px-0 mx-auto lg:w-1/3 flex flex-col justify-between">
            <div>
              <h1 className="wb text-center text-lg lg:text-xl font-semibold text-[#70E000] mb-2 drop-shadow-sm">
                {item.currency}
                {item.price} / ea.
              </h1>
              <h2 className="text-center text-2xl lg:text-3xl mb-12">{item.title}</h2>

              <div className="flex flex-wrap marker:flex-row justify-around mb-4">
                {models.map((m, i) => (
                  <button key={"MODEL_" + i} className="basis-1/4 lg:basis-6 text-xs text-center lg:hover:opacity-75 mx-3 mb-4" onClick={() => selectModel(i)}>
                    <div
                      className={`w-12 lg:w-16 h-12 lg:h-16 mx-auto border-2 rounded-full mb-4 ${
                        i == selectedModel ? `outline outline-[3px] outline-offset-2 lg:outline-offset-4 outline-[#70E000]` : ""
                      }`}
                      style={{ backgroundColor: m.thumbnail }}
                    ></div>
                    <p>{m.title}</p>
                  </button>
                ))}
              </div>

              {checkOutCount.length > 0 && (
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-x-3 gap-y-2 divide-y lg:divide-x lg:divide-y-0 py-4 border-t">
                  {checkOutCount.map((option, _) => (
                    <button
                      key={"COC_" + option.id + _}
                      onClick={() => handleCheckOutCount(option.id)}
                      className={`w-full py-4 lg:px-2 text-xs text-center rounded-sm ${
                        option.selected ? `outline outline-[3px] outline-[#70E000]` : `hover:outline outline-[1px] outline-[#70E000]`
                      }`}
                    >
                      {option.title}
                    </button>
                  ))}
                </div>
              )}

              {selectedCheckOutOption.length > 0 && (
                <div className="mb-12 py-4 border-t">
                  <p className="text-xs mb-2">Select Charging Station:</p>
                  {selectedCheckOutOption.map((option, _) => (
                    <button
                      key={"COP_" + option.id + _}
                      onClick={() => handleSelectCheckOutOption(option.id)}
                      className={`border-2 w-full flex justify-between items-start py-4 px-4 text-sm text-left rounded-md mb-4 lg:hover:opacity-75 ${
                        option.selected ? `outline outline-[3px] outline-offset-2 outline-[#70E000]` : ``
                      }`}
                    >
                      <div>
                        <p className="mb-1">{option.title}</p>
                        <small className="text-gray-500">{option.description}</small>
                      </div>
                      <div className="text-xs text-gray-500">{option.price}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              {item?.disclaimers && <p className="block mb-6 text-[8px] text-center lg:text-xs border-2 border-gray-400 drop-shadow-xl mx-auto p-3 lg:p-4 rounded-md lg:-skew-x-12">{item.disclaimers}</p>}

              <div className="mb-8">
                <button
                  onClick={handleAddToCart}
                  className="block w-fit ml-auto mb-1 lg:mb-2 text-base lg:text-lg font-semibold text-[#70E000] underline underline-offset-4 hover:no-underline"
                >
                  Add to Cart
                </button>
                {/* <button
                  onClick={handleQuickCheckOut}
                  className="block w-fit ml-auto mb-1 lg:mb-2 text-base lg:text-lg font-semibold text-[#70E000] underline underline-offset-4 hover:no-underline"
                >
                  Continue to Checkout
                </button> */}
              </div>
              <p className="py-4 font-medium text-gray-600 text-[10px] lg:text-xs text-opacity-65 border-t">
                {item.checkOutNotes.map((note) => note + " ")}
                <Link href="/terms" className="underline hover:no-underline">
                  Terms and policies
                </Link>{" "}
                apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
