"use client";

import Link from "next/link";
// import Image from "next/image";
import { CirclePlay } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  const touchStartX = useRef(null);
  const titleRef = useRef();
  const subtitleRef = useRef();
  const priceRef = useRef();
  const subCardsRef = useRef();

  const cards = [
    { id: 0, title: "Faster Service", content: "This is card 2" },
    { id: 1, title: "Save On Labor", content: "This is card 3" },
    { id: 2, title: "Eliminate Maintenance", content: "This is card 1" },
    { id: 3, title: "Improve Operations", content: "This is card 3" },
  ];

  useEffect(() => {
    gsap.fromTo(
      priceRef.current,
      { y: 20, opacity: 0 },
      { y: 0.7, opacity: 1, delay: 1, duration: 0.8, ease: "power2.out" }
    );
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
      }
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
      }
    );
    // Cleanup on component unmount
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
    <main className="pt-12">
      <section className="relative flex flex-col justify-center min-h-[50vh] lg:min-h-[1000px] w-screen pb-16">
        <div className="relative mx-auto h-full flex flex-col justify-between items-center text-center">
          <div className="mb-20 lg:mb-36"></div>
          <h1 ref={titleRef} className="wb text-4xl lg:text-6xl font-light mb-20">
            <span className="block wb text-4xl sm:text-6xl lg:text-6xl 2xl:text-7xl mb-4 tex-[#70e000] uppercase drop-shadow-xl stroke">ONE. TWO. PUFF.</span>
          </h1>
          <div ref={subtitleRef} className="w-full flex justify-center items-center h-40 mb-24">
            <button className="block mx-auto">
              <CirclePlay strokeWidth={0.75} size={96} className="hover:stroke-[#70e000]" />
            </button>
          </div>
        </div>
      </section>

      <section className="min-h-96 w-screen pb-16">
        <div ref={subCardsRef} className="w-full mx-auto text-center">
          <div className="lg:hidden relative mb-16 mx-auto w-full overflow-hidden">
            <div className="slider-wrapper" ref={sliderRef} style={{ transform: `translateX(-${current * 100}%)` }}>
              {cards.map((card, _) => (
                <div key={"SMALL_" + _} className="min-w-full">
                  <h3>{card.title}</h3>
                  {/* <p className="text-sm">{card.content}</p> */}
                  <div className="w-full p-4">
                    <div className="border-2 w-full rounded-xl h-72"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="controls">
              <button onClick={prev}>&lt;</button>
              <button onClick={next}>&gt;</button>
            </div> */}

            <div className="indicators">
              {cards.map((_, index) => (
                <button key={index} className={index === current ? "active" : ""} onClick={() => goTo(index)} />
              ))}
            </div>
          </div>

          <div className="hidden lg:w-4/5 px-6 mx-auto lg:grid grid-cols-1 lg:grid-cols-4 gap-x-6 mb-16">
            {cards.map((card, _) => (
              <div key={"WIDE_" + _} className="block w-full">
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

        <div className="lg:w-1/3 mx-auto text-center py-12">
          <Link href="/pro" className="block w-fit mx-auto mb-4">
            <h2 className="text-xl font-semibold underline underline-offset-4 hover:no-underline">Explore Available Trims</h2>
          </Link>
          <p className="text-center font-medium text-gray-600 text-[7pt] lg:text-xs text-opacity-65 w-4/5 mx-auto">
            Available through Hooky Sales only. Customizations available. Product support and availability based on region.
          </p>
        </div>
      </section>
    </main>
  );
}
