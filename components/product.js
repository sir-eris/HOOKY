"use client";

import Link from "next/link";
import { gsap } from "gsap";
import { useRef, useState, useEffect } from "react";
import { CirclePlay } from "lucide-react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Breeze2 = ({ data }) => {
  const elementsRef = useRef([]);
  const titleRef = useRef();
  const subtitleRef = useRef();
  const priceRef = useRef();
  const lowerRef = useRef();
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  const touchStartX = useRef(null);
  const subCardsRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 60, opacity: 0, scaleY: 5 },
      {
        y: 0,
        opacity: 1,
        scaleY: 1.1,
        duration: 1,
        ease: "bounce.inOut",
      },
    );
    gsap.fromTo(priceRef.current, { y: 20, opacity: 0 }, { y: 0.7, opacity: 1, delay: 1, duration: 0.8, ease: "power2.out" });
    gsap.fromTo(
      subtitleRef.current,
      { y: 30, opacity: 0, skewY: 5 },
      {
        y: 0,
        opacity: 1,
        skewY: 0,
        delay: 0.3,
        duration: 0.9,
        ease: "power3.out",
      },
    );
    gsap.fromTo(
      lowerRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: lowerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
    gsap.fromTo(
      subCardsRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: subCardsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
    elementsRef.current.forEach((el, i) => {
      if (!el) return;
      const text = el.querySelector(".modern-text");
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 99%",
          end: "top 50%",
          scrub: true,
          markers: false,
        },
      });
      gsap.fromTo(
        el,
        {
          opacity: 0.6,
          x: el.classList.contains("description") ? "-100px" : "100px",
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 99%",
            end: "top 50%",
            scrub: true,
          },
        },
      );
      gsap.fromTo(
        text,
        {
          y: 100,
        },
        {
          y: 0,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 99%",
            end: "top 50%",
            scrub: true,
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const next = () => {
    if (!cards || cards.length === 0) return;
    setCurrent((prev) => (prev + 1) % cards.length);
  };

  const prev = () => {
    if (!cards || cards.length === 0) return;
    setCurrent((prev) => (prev - 1 + cards.length) % cards.length);
  };
  const goTo = (index) => setCurrent(index);
  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) next();
    if (diff < -50) prev();
  };

  useEffect(() => {
    sliderRef.current?.addEventListener("touchstart", handleTouchStart);
    sliderRef.current?.addEventListener("touchend", handleTouchEnd);
    return () => {
      sliderRef.current?.removeEventListener("touchstart", handleTouchStart);
      sliderRef.current?.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <>
      {/* <section className="relative flex flex-col justify-center min-h-[50vh] lg:min-h-[1000px] w-screen pb-16 mb-16">
        <div className="relative mx-auto h-full flex flex-col justify-between items-center text-center">
          <div className="mb-16 lg:mb-24"></div>
          <h1 className="wb text-3xl lg:text-6xl font-black">
            <span
              
              className="block w-fit mb-2 px-5 lg:px-7 py-2 lg:py-3 rounded-sm uppercase drop-shadow-xl stroke -skew-x-12 border-2 border-gray-500 outline outline-[6px] lg:outline-8 outline-[#70e000]"
            >
              Unleash
            </span>
            <span
              
              className="block w-fit ml-12 lg:ml-20 px-5 lg:px-7 py-2 lg:py-3 rounded-sm uppercase drop-shadow-xl stroke -skew-x-12 border-2 border-gray-500 outline outline-[6px] lg:outline-8 outline-[#70e000]"
            >
              The Beast.
            </span>
          </h1>
          <div  className="w-full flex justify-center items-center my-24">
            <button className="block mx-auto">
              <CirclePlay strokeWidth={0.75} size={96} className="hover:stroke-[#70e000]" />
            </button>
          </div>
          <div ref={lowerRef} className="w-2/3 lg:w-3/5">
            <Link href="/pro/register" className="block w-fit mx-auto">
              <p className="font-semibold text-lg underline underline-offset-4 hover:no-underline mb-4">Businesses Register Now</p>
            </Link>
            <p className="text-center font-medium text-gray-600 text-[7pt] lg:text-xs text-opacity-65">
              Available through Hooky Sales only. Customizations available. Product support and availability based on region.
            </p>
          </div>
        </div>
      </section> */}

      <section className="relative flex flex-col justify-center min-h-[50vh] lg:min-h-[1000px] w-screen">
        <div className="relative mx-auto h-full flex flex-col justify-between items-center text-center">
          <div className="mb-20 lg:mb-36"></div>
          <h1 ref={titleRef} className="wb text-4xl lg:text-6xl font-bold mb-20">
            <span className="block w-fit mb-2 px-5 lg:px-7 py-2 lg:py-3 rounded-sm uppercase drop-shadow-xl stroke -skew-x-12 border-2 border-gray-500 outline outline-[6px] lg:outline-8 outline-[#70e000]">
              {data.landing.title}
            </span>
            <span ref={priceRef} className="block text-[#70e000] text-sm lg:text-xl">
              {data.landing.price}
            </span>
          </h1>
          <div ref={subtitleRef} className="w-full flex justify-center items-center h-40 mb-24">
            <button className="block mx-auto">
              <CirclePlay strokeWidth={0.75} size={96} className="hover:stroke-[#70e000]" />
            </button>
          </div>
          <div ref={lowerRef} className="w-2/3 lg:w-3/5">
            <Link href={data.landing.link.uri} className="block w-fit mx-auto">
              <p className="font-semibold text-lg underline underline-offset-4 mb-4 hover:no-underline">{data.landing.link.title}</p>
            </Link>
            <p className="text-center font-medium text-gray-600 text-[7pt] lg:text-xs text-opacity-65">{data.landing.subTitle}</p>
          </div>
        </div>
      </section>

      <section className="pb-8 mb-8">
        <div ref={subCardsRef} className="w-full mx-auto text-center">
          <div className="lg:hidden relative mb-16 mx-auto w-full overflow-hidden">
            <div className="slider-wrapper" style={{ transform: `translateX(-${current * 100}%)` }}>
              {data.subCards.map((card, _) => (
                <div key={"SMALL_" + _} className="min-w-full">
                  <h3>{card.title}</h3>
                  <div className="w-full p-4">
                    <div className="border-2 w-full rounded-xl h-72"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="indicators">
              {data.subCards.map((_, index) => (
                <button key={index} className={index === current ? "active" : ""} onClick={() => goTo(index)} />
              ))}
            </div>
          </div>

          <div className="hidden lg:w-4/5 px-6 mx-auto lg:grid grid-cols-1 lg:grid-cols-4 gap-x-6 mb-16">
            {data.subCards.map((card, _) => (
              <div key={"WIDE_" + _} className="hidden lg:block mb-16">
                <span className="block mx-auto mb-2 w-4 h-4 rounded-full border-gray-200 border shadow-md bg-[#70e000]"></span>
                <h3 className="mb-4">{card.title}</h3>
                <hr />
                <div className="w-full h-full mt-4">
                  <div className="w-full h-72 bg-gray-50 rounded-xl blur-sm"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="w-5/6 mx-auto min-h-96 flex flex-col gap-x-12 lg:flex-row mb-12">
        <div className="w-full lg:w-1/2 mb-16">
          <h2 className="wb w-fit mx-auto text-2xl lg:text-4xl font-black mb-12">
            <span className="block w-fit mx-auto mb-2 px-5 lg:px-7 py-2 lg:py-3 rounded-sm uppercase drop-shadow-xl stroke -skew-x-12 border-2 border-gray-500 outline outline-[6px] lg:outline-8 outline-[#70e000]">
              Built To Last
            </span>
            <span className="block w-fit mx-auto px-5 lg:px-7 py-2 lg:py-3 rounded-sm uppercase drop-shadow-xl stroke -skew-x-12 border-2 border-gray-500 outline outline-[6px] lg:outline-8 outline-[#70e000]">
              A Lifetime
            </span>
          </h2>
          <div className="w-full mb-6">
            <div className="image-placeholder">
              <b></b>
            </div>
          </div>
          <Link href="/order/pro" className="text-nowrap block w-fit mx-auto font-semibold rounded-xl underline hover:no-underline underline-offset-2 mb-6">
            Explore Available Trims
          </Link>
          <h3 className="text-sm lg:text-base mx-auto text-center">
            Recycled <i>Aerospace-grade Aluminum</i> machined to perfection. Finely textured by micro-particles to achieve a smooth finish. Anodized with a series of coatings for
            extra durability and an even silkier feel.
          </h3>
        </div>
        <div className="w-full lg:w-1/2 mb-16">
          <h2 className="w-fit mx-auto wb text-xl lg:text-4xl font-black mb-12">
            <span className="block w-fit mx-auto mb-2 px-5 lg:px-7 py-2 lg:py-3 rounded-sm uppercase drop-shadow-xl stroke -skew-x-12 border-2 border-gray-500 outline outline-[6px] lg:outline-8 outline-[#70e000]">
              Lifetime Warranty
            </span>
            <span className="block w-fit mx-auto px-5 lg:px-7 py-2 lg:py-3 rounded-sm uppercase drop-shadow-xl stroke -skew-x-12 border-2 border-gray-500 outline outline-[6px] lg:outline-8 outline-[#70e000]">
              On Electronics
            </span>
          </h2>
          <div className="w-full mb-6">
            <div className="image-placeholder">
              <b></b>
            </div>
          </div>
          <Link href="/warranty" className="text-nowrap block w-fit mx-auto font-semibold rounded-xl underline hover:no-underline underline-offset-2 mb-6">
            Warranty Process
          </Link>
          <h3 className="text-sm lg:text-base mx-auto text-center">
            PRO is built to last. Industry tested parts and materials maximizes reliability eliminating hassles and malfunctions.
          </h3>
        </div>
      </section>

      <section className="w-5/6 mx-auto pb-16 mb-16">
        <h1 className="w-fit mx-auto wb text-xl lg:text-4xl font-black mb-12 text-center">
          <span className="block w-fit mx-auto mb-2 px-5 lg:px-7 py-2 lg:py-3 rounded-sm uppercase drop-shadow-xl stroke -skew-x-12 border-2 border-gray-500 outline outline-[6px] lg:outline-8 outline-[#70e000]">
            Mega Tech Powerhouse
          </span>
        </h1>
        <div className="flex flex-col lg:flex-row gap-x-12">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-16">
            <div className="w-full">
              <div className="image-placeholder">
                <b></b>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mb-6 lg:mb-16">
            <div className="w-full">
              <div className="image-placeholder">
                <b></b>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center">
          <Link href="pro/setup" className="text-nowrap block w-fit mx-auto font-semibold rounded-xl underline hover:no-underline underline-offset-2 mb-6">
            Setup And Safety Manual
          </Link>
          <h2 className="text-sm lg:text-base lg:w-1/2 mx-auto text-center">
            A fully integrated experience for everyone. Host Control™ automates end-to-end communication. Active Hygiene™ maintains tank germ level to minimum. Host Lock™
            ensures operation safety. Connect Auto™ uses software to manage each in-use zone.
          </h2>
        </div>
      </section> */}

      {data.cards.map((item, index) => (
        <section className={`w-5/6 mx-auto min-h-96 flex flex-col-reverse ${index % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"} pb-16 lg:mb-16`}>
          <div
            ref={(el) => (elementsRef.current[index * 2 + (index % 2 == 1 ? 0 : 1)] = el)}
            className={`${index % 2 == 0 ? "description" : "graphic"} w-full lg:w-1/2 text-center mx-auto`}
          >
            <div className="image-placeholder bg-gray-50 rounded-xl blur-sm">
              {/* {item.graphics} */}
              <b></b>
            </div>
          </div>
          <div
            ref={(el) => (elementsRef.current[index * 2 + +(index % 2 == 0 ? 0 : 1)] = el)}
            className={`${index % 2 == 1 ? "description" : "graphic"} w-full lg:w-1/2 m-auto text-center flex flex-col justify-center items-center`}
          >
            <h1 className="modern-text wb font-extrabold text-xl lg:text-4xl uppercase mb-2 lg:mb-4 px-8 lg:px-24 drop-shadow-xl">{item.title}</h1>
            <h2 className="mb-6 lg:mb-20 text-sm font-bold text-[#70e000] wb">{item.subTitle}</h2>
            <h3 className="lg:w-3/4 mx-auto mb-4 lg:mb-6 text-sm lg:text-base">{item.description.map((i, x) => (x != item.description.length - 1 ? i + " | " : i))}</h3>
            {item?.link && (
              <Link href={item.link.uri} className="block text-sm mb-6 lg:mb-0 tex-[#70e000] font-semibold lg:text-base underline underline-offset-4 hover:no-underline">
                {item.link.title}
              </Link>
            )}
          </div>
        </section>
      ))}
    </>
  );
};

export default Breeze2;
