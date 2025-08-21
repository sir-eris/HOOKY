"use client";

export function UserManualCard({ item }) {
  return (
    <>
      <div className="absolute w-screen h-[50vh] lg:min-h-screen bg-[url('/2.png')] bg-no-repeat bg-top bg-contain animate__animated animate__fadeInDown"></div>
      <section className="flex flex-col mb-16 lg:mb-36">
        <div className="h-96 lg:h-[70vh] w-full grid grid-cols-1 grid-rows-3 text-center">
          <div></div>
          <h1 className="font-normal uppercase">
            <span className="block text-xl lg:text-2xl mb-2 lg:mb-4">
              Step-By-Step
            </span>
            <span className="block wb text-4xl lg:text-6xl mb-4 lg:mb-8 text-[#70E000] font-bold drop-shadow-md">
              User Manual
            </span>
            <span className="block font-black text-xl lg:text-4xl wb">
              – {item.title} –
            </span>
          </h1>
          <div className="w-full flex flex-col justify-end items-center mb-4 lg:mb-8">
            <a
              href={item.pdf}
              download
              className="text-sm underline underline-offset-4 hover:underline-none"
            >
              Download A Copy
            </a>
          </div>
        </div>
      </section>

      <section className="w-full h-[1000px] lg:h-[3500px]">
        <div className="w-screen h-full bg-[url('/7.png')] bg-no-repeat bg-center bg-contain"></div>
      </section>
    </>
  );
}
