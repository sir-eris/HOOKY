"use client";

import { useRef, useState, useEffect } from "react";
import { useCart } from "../contexts/CartContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Card = ({ item, index, length }) => {
  const [current, setCurrent] = useState(0);
  const [quickCheckOutError, setQuickCheckOutError] = useState(false);
  const [loadingQuickCheckout, setLoadingQuickCheckout] = useState(false);
  const { addToCart } = useCart();
  const sliderRef = useRef(null);
  const touchStartX = useRef(null);
  const touchMoved = useRef(false);

  const next = () => {
    setCurrent((prev) => (prev + 1) % item.images.length);
  };
  const prev = () => {
    setCurrent((prev) => (prev - 1 + item.images.length) % item.images.length);
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

  const handleAddToCart = (i) => {
    const _item = {
      id: Math.random(),
      title: item.title,
      price: item.price,
      type: "accessory",
      url: "/accessories",
      count: 1,
      model: null,
      checkOutOptions: [],
    };

    addToCart(_item);
  };

  const handleQuickCheckout = async (i) => {
    setLoadingQuickCheckout(true);
    const _item = {
      id: Math.random(),
      title: item.title,
      price: item.price,
      url: "/accessories",
      count: 1,
      model: null,
      checkOutOptions: [],
    };

    const session = await stripeCheckout(_item);
    if (!session) {
      setLoadingQuickCheckout(false);
      setQuickCheckOutError(true);
      setTimeout(() => {
        setQuickCheckOutError(false);
      }, 2000);
    }
  };

  useEffect(() => {
    if (!sliderRef.current) return;
    sliderRef.current?.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    sliderRef.current?.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    });
    return () => {
      sliderRef.current?.removeEventListener("touchstart", handleTouchStart);
      sliderRef.current?.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <>
      {quickCheckOutError && (
        <div className="notification warning">
          <p>Quick Checkout processing couldn't complete. Please try again.</p>
        </div>
      )}
      <div key={item.id + "_ACCESSORY_" + index} className={`w-full pt-10 pb-12 ${index < length - 2 && `border-b`} ${index % 2 == 1 ? `lg:border-l lg:pl-12` : `lg:pr-12`}`}>
        <div className="w-full flex justify-between items-end mb-4">
          <h1 className="wb drop-shadow-sm">{item.title}</h1>
          <h2 className="wb text-sm tex-[#70e000] drop-shadow-sm font-semibold">{item.price}</h2>
        </div>

        <div className="group relative mx-auto w-full overflow-hidden mb-4 pb-12 lg:mb-0">
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
            {item.images.map((img, x) => (
              <div key={item.id + "_SMALL_" + x} className="min-w-full">
                <div className="w-full px-2">
                  <div className="border w-full rounded-xl h-72 bg-white"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute w-full left-0 bottom-0 flex justify-between items-center px-2 mb-2 transition-opacity duration-300">
            <button
              onClick={() => prev()}
              className="w-8 h-8 bg-white border-4 border-white hover:border-gray-200 hover:shadow-md rounded-full z-20 flex justify-center items-center transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="mr-[2px]" />
            </button>
            <div className="indicators">
              {item.images.map((y, i) => (
                <button key={i} className={`${i === current ? `active` : ``}`} onClick={() => goTo(i)} />
              ))}
            </div>
            <button
              onClick={() => next()}
              className="w-8 h-8 bg-white border-4 border-white hover:border-gray-200 hover:shadow-md rounded-full z-20 flex justify-center items-center transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="ml-[2px]" />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:h-24 lg:px-0 lg:items-end">
          <div className="lg:w-1/2 lg:border-r mb-12 lg:mb-0">
            <p className="text-[11px] pr-2 text-gray-700">
              {item.checkoutNotes.map((i, z) => (
                <span key={"NOTE_" + z} className="block">
                  {i}
                </span>
              ))}
            </p>
          </div>
          <div className="lg:w-1/2">
            {item.is_available ? (
              <>
                <button
                  onClick={() => handleAddToCart(_)}
                  className="block w-fit ml-auto mb-1 lg:mb-2 text-sm lg:text-base font-semibold text-[#70E000] underline underline-offset-4 hover:no-underline"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleQuickCheckout(_)}
                  className="block w-fit ml-auto text-sm lg:text-base font-semibold text-[#70E000] underline underline-offset-4 hover:no-underline"
                >
                  {loadingQuickCheckout ? (
                    <div className="spinner-box mt-2">
                      <div className="pulse-container">
                        <div className="pulse-bubble pulse-bubble-1"></div>
                        <div className="pulse-bubble pulse-bubble-2"></div>
                        <div className="pulse-bubble pulse-bubble-3"></div>
                      </div>
                    </div>
                  ) : (
                    "Continue to Checkout"
                  )}
                </button>
              </>
            ) : (
              <p className="block w-fit ml-auto text-sm lg:text-base font-semibold text-gray-500">OUT OF STOCK</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
