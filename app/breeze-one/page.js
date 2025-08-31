import Link from "next/link";

export const metadata = {
  title: "Breeze 1 - HOOKY",
  description: "Breeze 1 is the first electric hookah running on a rechargeable battery pack and a heating element.",
};

// "use client";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { useEffect, useRef } from "react";
// import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

export default function Breeze1() {
  // const line1Ref = useRef();
  // const line2Ref = useRef();
  // const lowerRef = useRef();
  // const imageRef = useRef(null);
  

  // useEffect(() => {
  //   gsap.fromTo(
  //     line1Ref.current,
  //     { x: "-100vw", opacity: 0, scaleX: 5 },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       scaleX: 1,
  //       duration: 1,
  //       ease: "bounce.inOut",
  //     }
  //   );
  //   gsap.fromTo(
  //     line2Ref.current,
  //     { x: "100vw", opacity: 0, scaleX: 5 },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       scaleX: 1,
  //       duration: 1,
  //       ease: "bounce.inOut",
  //     }
  //   );
  //   gsap.fromTo(
  //     lowerRef.current,
  //     { y: 60, opacity: 0 },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       duration: 1,
  //       ease: "power2.out",
  //       scrollTrigger: {
  //         trigger: lowerRef.current,
  //         start: "top 70%",
  //         toggleActions: "play none none none",
  //       },
  //     }
  //   );

  //   // if (window.innerWidth <= 640) {
  //     gsap.fromTo(
  //       imageRef.current,
  //       {
  //         opacity: 0,
  //         y: 50,
  //       },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 1.2,
  //         ease: "power3.out",
  //       }
  //     );
  //   // }
  // }, []);

  return (
    <main className="pt-12 overflow-hidden">
      <section className="relative flex flex-col justify-center min-h-[50vh] lg:min-h-[1000px] w-screen pb-16 lg:mb-16">
        <div className="lg:w-1/2 mx-auto lg:mb-24 text-center">
          <h1 className="wb text-4xl sm:text-6xl lg:text-6xl 2xl:text-7xl mt-24 lg:my-44 font-black text-[#70e000] italic uppercase drop-shadow-xl stroke">
            <span className="block">Electric.</span>
            <span className="block">Eccentric.</span>
          </h1>
        </div>
        <div className="relative mt-12 mb-6 lg:m-0 w-full h-96 lg:absolute lg:w-full lg:h-full lg:top-6 lg:left-0 bg-[url('/test2.png')] lg:bg-[url('/test1.png')] bg-no-repeat bg-center bg-contain"></div>
        <div className="w-3/4 lg:w-1/3 mx-auto mb-24">
          <p className="block w-fit mx-auto mb-2 text-sm lg:text-base">Sold Out.</p>
          <p className="lg:w-2/3  mx-auto text-center font-medium text-gray-600 text-[7pt] lg:text-xs text-opacity-65">
            Explore the history of Breeze,{" "}
            <Link href="/pro" className="underline underline-offset-4 hover:no-underline">
              Shop The New Breeze Pro
            </Link>
            , Learn more about who we are and get a chance to be a Trailblazer!
          </p>
        </div>
      </section>

      <section className="w-5/6 mx-auto min-h-96 flex flex-col lg:flex-row pb-16 lg:mb-16">
        <div className="w-full mx-auto lg:w-1/2 text-center flex flex-col justify-center items-center">
          <h2 className="wb mb-6 lg:mb-20 text-[#70e000] font-black text-4xl lg:text-5xl italic uppercase drop-shadow-xl text-nowrap">
            Set-It &<span className="block">Forget-It</span>
          </h2>
          <h3 className="lg:w-3/4 mb-4 lg:mb-6 text-sm lg:text-base">Stays Clean | Easy To Use | Large Tray Capacity | Heats Up Rapidly | Stress Tested</h3>
          <Link href="/breeze-one/user-manual" className="block text-xs mb-6 lg:mb-0 lg:text-sm underline underline-offset-4 hover:no-underline">
            User Manual
          </Link>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="w-full h-[40vw] bg-[url('/test3.png')] bg-no-repeat bg-center bg-contain"></div>
        </div>
      </section>

      <section className="w-5/6 mx-auto min-h-96 flex flex-col-reverse lg:flex-row pb-16 lg:mb-16">
        <div className="lg:w-1/2 w-full">
          <div className="w-full h-[40vw] bg-[url('/test4.png')] bg-no-repeat bg-center bg-contain lg:scale-150"></div>
        </div>
        <div className="w-full mx-auto lg:w-1/2 m-auto text-center flex flex-col justify-center items-center">
          <h2 className="wb text-[#70e000] font-black text-4xl lg:text-5xl italic uppercase mb-6 lg:mb-20 drop-shadow-xl">
            Monster
            <br />
            Battery
          </h2>
          <h3 className="lg:w-3/4 mb-6 lg:mb-6 text-sm lg:text-base">3 Sessions | Safe To Charge While In-Use | Auto Fast-Charging | Smart Power Management</h3>
        </div>
      </section>

      <section className="w-5/6 mx-auto min-h-96 pb-16 mb-16">
        <div className="w-full lg:w-2/3 mx-auto text-center lg:px-36">
          <h2 className="wb text-[#70e000] font-black text-4xl lg:text-5xl italic uppercase mb-36 drop-shadow-xl">
            Built To Last
            <br />A Lifetime
          </h2>
          <h3 className="mb-4 lg:mb-6 text-sm lg:text-base">
            Recycled <i>Aerospace-grade Aluminum</i> machined to perfection. Textured by micro-particles to achieve a smooth finish. Anodized with a series of coatings for extra
            durability and an even silkier feel.
          </h3>
        </div>
      </section>

      <section className="relative flex flex-col lg:flex-row lg:min-h-96 w-screen lg:px-40 pb-16">
        <div className="w-full mx-auto text-center lg:text-left lg:w-1/3">
          <div className="">
            <h2 className="text-xl lg:text-3xl mb-2 lg:mb-4 font-normal">
              <span className="block">The All-New</span>
              <span className="text-[#70E000] font-semibold">Electric</span> Experience
            </h2>
            <h3 className="lg:mb-36 text-[10px] lg:text-sm">For savvies who care about quality.</h3>
          </div>

          <div className="lg:hidden mt-6 w-full h-[40vw] bg-[url('/6.png')] bg-no-repeat bg-center bg-contain"></div>

          <div className="w-2/3 mx-auto lg:w-full">
            <p className="block mx-auto lg:mx-0 w-fit text-base lg:text-lg mb-4 lg:mb-6">Sold Out.</p>
            <p className="w-full mx-auto font-medium text-gray-600 text-[8px] lg:text-xs text-opacity-65 mb-4">
              Explore the history of Breeze,{" "}
              <Link href="/pro" className="underline underline-offset-4 hover:no-underline">
                Shop The New Breeze Pro
              </Link>
              , Learn more about who we are and get a chance to be a Trailblazer!
            </p>
          </div>
        </div>
        <div className="hidden lg:block w-full lg:w-2/3">
          <div className="absolute -right-24 w-screen h-[500px] bg-[url('/6.png')] bg-no-repeat bg-right bg-contain -z-10"></div>
        </div>
      </section>
    </main>
  );
}
