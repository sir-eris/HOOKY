import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { CartProvider } from "../context/CartContext";
import Header from "../components/header"
import "./globals.css";
import footer1 from "../public/footer_1.png";
import footer2 from "../public/footer_2.png";

export const metadata = {
  title: "Hooky",
  description:
    "Fully Electric Battery-Powered Commercial-Grade Hookah.",
  icons: {
    icon: "/favicon.ico", // Path to your favicon file in the public folder
    // apple: "/apple-touch-icon.png", // Optional for Apple Touch devices
  },
};

export default function RootLayout({ children }) {
  const footer = [
    // {
    //   id: 0,
    //   uri: "/breeze-one",
    //   title: "Breeze 1"
    // },
    // {
    //   id: 1,
    //   uri: "/breeze-two",
    //   title: "Breeze 2"
    // },
    {
      id: 2,
      uri: "/pro",
      title: "PRO"
    },
    {
      id: 3,
      uri: "/order/status",
      title: "Check Order Status"
    },
    {
      id: 4,
      uri: "/accessories",
      title: "Accessories"
    },
    {
      id: 5,
      uri: "/contact",
      title: "Contact Us"
    },
    {
      id: 6,
      uri: "/faq",
      title: "FAQs"
    },
    {
      id: 7,
      uri: "/terms",
      title: "Terms & Policies"
    }
  ]
  return (
    <html lang="en">
      <body>
        <Script src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDWUuBTuV0TBojaMicCmuyJwIWu-qeQLds&libraries=places`} strategy="beforeInteractive" />
        <CartProvider>
          <>
            <Header />
            {children}
          </>
        </CartProvider>

        <section className="min-h-96 grid lg:grid-rows-1 lg:grid-cols-2 border-t w-screen bg-[#F8F8F8] overflow-hidden">
          <Link href="/accessories" className="relative hover:bg-white/90">
            <div className="lg:h-96 min-h-48 w-full flex flex-col justify-between items-center text-center p-12 bg-[url('/')] bg-no-repeat bg-center bg-contain border-b">
              <h1 className="max-w-96 text-lg lg:text-2xl font-normal uppercase mb-24 lg:mb-0">
                <span className="block mb-1 lg:mb-3">Boost</span>{" "}
                <span className="block wb text-3xl lg:text-5xl mb-1 lg:mb-3 text-[#70E000] font-extrabold drop-shadow-xl">Performance</span>
                <span className="block">Accessories</span>
              </h1>
              <h2 className="max-w-96 text-sm font-normal mb-4">Increase performance, expedite service, elevate customer experience.</h2>
            </div>
          </Link>
          <Link href="/order/disposable-tray" className="relative hover:bg-white/90">
            <div className="lg:h-96 min-h-48 w-full flex flex-col justify-between items-center text-center p-12 bg-[url('/')] bg-no-repeat bg-top bg-contain border-b lg:border-l">
              <h1 className="max-w-96 text-lg lg:text-2xl font-normal uppercase mb-24 lg:mb-0">
                <span className="block mb-1 lg:mb-3">The Nuclear</span>{" "}
                <span className="block wb text-3xl lg:text-5xl mb-1 lg:mb-3 text-[#70E000] font-extrabold drop-shadow-xl">Productivity</span>
                <span className="block">Explosion</span>
              </h1>
              <h2 className="text-sm font-normal mb-4">Explore Disposable Pre-Packed Trays in over 10 flavors.</h2>
            </div>
          </Link>
          <Link href="/pro/setup" className="relative hover:bg-white/90">
            <div className="lg:h-96 min-h-48 w-full flex flex-col justify-between items-center text-center p-12 bg-[url('/')] bg-no-repeat bg-top bg-contain border-b">
              <h1 className="max-w-96 font-normal uppercase mb-24">
                <span className="block text-lg mb-1">Hey There,</span>{" "}
                <span className="block wb text-3xl lg:text-5xl text-[#70E000] font-extrabold drop-shadow-xl">
                  <i>Trailblazer!</i>
                </span>
              </h1>
              <h2 className="text-sm font-normal mb-4">Step by step user manual.</h2>
            </div>
            <Image src={footer1} width={65} className="absolute lg:w-auto bottom-0 left-4 lg:left-6 lg:right-12 z-10" />
          </Link>
          <Link href="/warranty" className="relative hover:bg-white/90">
            <div className="lg:h-96 min-h-48 w-full flex flex-col justify-between items-center text-center p-12 bg-[url('/')] bg-no-repeat bg-center bg-contain border-b lg:border-l">
              <h1 className="max-w-96 text-lg lg:text-2xl font-normal uppercase mb-24 lg:mb-0">
                <span className="block mb-1 lg:mb-3">One</span>{" "}
                <span className="block wb text-3xl lg:text-5xl mb-1 lg:mb-3 text-[#70E000] font-extrabold drop-shadow-xl">User-Friendly</span>
                <span className="block">Experience</span>
              </h1>
              <h2 className="max-w-96 text-sm font-normal mb-4">End-to-end warranty process.</h2>
            </div>
            <Image src={footer2} width={65} className="absolute w-7 lg:w-auto bottom-0 right-6 lg:right-12 z-10" />
          </Link>
        </section>

        <footer className="z-20 w-screen min-h-12 lg:h-12 flex flex-col-reverse lg:flex-row justify-center items-center text-xs bg-[#F5F5F5]">
          {/* <div className="hidden lg:block lg:w-1/4">
            <Link href="/" className="flex justify-center items-center gap-x-2 my-3">
              <span className="flex justify-center items-center rounded-full bg-[#89FC00] hover:bg-[#70E000] transition-colors w-6 h-6 border">
                <span className="block w-4 h-4 rounded-full bg-[#F8F9FA]"></span>
              </span>
              <p className="text-left font-semibold text-[#4b4c4b]">HOOKY</p>
            </Link>
            <small>TM and © Hooky Inc. 2025. All Rights Reserved.</small>
          </div> */}
          <div className="hidden lg:flex lg:w-1/2 flex-col lg:flex-row justify-center items-center h-full lg:gap-x-12">
            {footer.map((item) => (
              <Link
                key={"LARGE_" + item.id}
                href={item.uri}
                className="flex items-center h-6 lg:h-12 border-t-2 border-[#f5f5f5] lg:hover:border-t-gray-500 transition-all text-nowrap"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="block lg:hidden w-screen h-fit bg-[#f7f7f7]">
            <ul>
              {footer.map((item) => (
                <Link key={"SMALL_" + item.id} href={item.uri} className="block w-full text-left border-b py-4 px-8">
                  {item.title}
                </Link>
              ))}
            </ul>
            <div className="block w-full text-left border-b py-4 px-8">
              <Link href="/" className="flex justify-start items-center gap-x-2 mb-2">
                <span className="flex justify-center items-center rounded-full bg-[#89FC00] hover:bg-[#70E000] transition-colors w-6 h-6 border">
                  <span className="block w-4 h-4 rounded-full bg-[#F8F9FA]"></span>
                </span>
                <p className="text-left font-semibold text-[#4b4c4b]">HOOKY</p>
              </Link>
              <small className="font-semibold text-gray-500">TM and Copyright © 2025 Hooky Inc. All Rights Reserved.</small>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
