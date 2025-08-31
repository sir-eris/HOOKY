// import Image from "next/image";
import Link from "next/link";
import Product from "../../components/product"

export const metadata = {
  title: "HOOKY PRO - A Leap Forward In Commercial Servicing",
  description: "Discover HOOKY PRO, the commercial-grade electric hookah by HOOKY.",
};

export default function pro() {
  const data = {
    landing: {
      title: "Unleash The Beast",
      price: "",
      link: {
        title: "BUY NOW",
        uri: "/pro/order",
      },
      subTitle: "Delivery begins Summer 2025. Cancel your order any time. Included free shipping and free 30-day return.",
      media: {},
    },
    subCards: [
      { id: 0, title: "No Setup", content: "This is card 2" },
      { id: 1, title: "Maintenance Free", content: "This is card 3" },
      { id: 2, title: "Auto On/Off", content: "This is card 1" },
      { id: 3, title: "Monster Battery", content: "This is card 3" },
    ],
    cards: [
      {
        id: 0,
        title: "Built To Last A Lifetime",
        subTitle: "Breeze 1 + 1",
        description: [
          "Recycled Aerospace-grade Aluminum machined to perfection. Finely textured by micro-particles to achieve a smooth finish. Anodized with a series of coatings for extra durability and an even silkier feel.",
        ],
        link: {
          title: "Explore Available Trims",
          uri: "/pro/order",
        },
        graphics: [],
      },
      {
        id: 0,
        title: "Mega Tech Powerhouse",
        subTitle: "Breeze 1 + 1",
        description: [
          "A fully integrated experience for everyone. Host Control™ automates end-to-end communication. Active Hygiene™ maintains tank germ level to minimum. Host Lock™ ensures operation safety. Connect Auto™ uses software to manage each in-use zone.",
        ],
        link: {
          title: "Setup And Safety Manual",
          uri: "/pro/setup",
        },
        graphics: [],
      },
      {
        id: 0,
        title: "Lifetime Warranty On Electronics",
        subTitle: "Breeze 1 + 1",
        description: ["PRO is built to last. Industry tested parts and materials maximizes reliability eliminating hassles and malfunctions."],
        link: {
          title: "Learn More",
          uri: "/warranty",
        },
        graphics: [],
      },
      {
        id: 0,
        title: "Timeless. Build. Quality.",
        subTitle: "Breeze 1 + 1",
        description: ["Tough Heating Element", "Anti-Scratch Coating", "Aerospace-grade Recycled Aluminum", "Food-Grade Internal Tank"],
        link: {
          title: "Compare Breeze 1",
          uri: "/breeze-one",
        },
        graphics: [],
      },
      {
        id: 1,
        title: "Minimal-Parts. Maximum-Ease.",
        subTitle: "17 FL OZ Water Bottle",
        description: ["Operates on one 17 FL OZ Water Bottle", "Monster 3 Session Battery", "No Disassembly Required"],
        link: {
          title: "User Manual",
          uri: "/breeze-two/user-manual",
        },
        graphics: [],
      },
      {
        id: 2,
        title: "Monobody Internal Air Path",
        subTitle: "Effortless Draw",
        description: ["Easy Air Hose Connect", "Seamless Air Path", "Durable Air Hose", "Tight Seals", "Universal Disposable Tip Mount"],
        graphics: [],
      },
      {
        id: 3,
        title: "Multi-Touch Experience",
        subTitle: "Intuitive Control",
        description: ["Auto Detect", "Finger Slide Heat Adjustment", "Haptic Touch Feedback", "Wide Touch Pad", "Child Lock"],
        graphics: [],
      },
      {
        id: 4,
        title: "Double-Edge Indicator Strip",
        subTitle: "Colorful RGB",
        description: ["360° Fluid Edge Illumination", "Fast Response", "Auto Sleep", "Low Power Consumption", "Smooth Transitions"],
        graphics: [],
      },
    ],
  };

  return (
    <main className="pt-12">
      <Product data={data} />

      <section className="flex flex-col lg:flex-row min-h-96 w-screen lg:px-40 pb-16">
        <div className="w-2/3 mx-auto text-center lg:text-left lg:w-1/3">
          <h1 className="wb text-lg lg:text-xl font-bold text-[#70E000] mb-2 lg:mb-4 drop-shadow-sm">
            $799
          </h1>
          <h2 className="text-xl lg:text-3xl mb-2 lg:mb-4 font-normal text-nowrap">
            <span className="block">A Leap Forward In</span>
            <span className="text-[#70E000] font-semibold">
              Commercial Servicing
            </span>{" "}
            
          </h2>
          <h3 className="mb-12 lg:mb-36 text-[10px] lg:text-sm">
            For business owners who want to be on the edge.
          </h3>
          <Link
            href="/order/pro"
            className="block mx-auto lg:mx-0 w-fit text-base lg:text-lg font-semibold text-[#70E000] underline underline-offset-4 hover:no-underline mb-4 lg:mb-6"
          >
            Buy Now
          </Link>
          <p className="lg:w-full mx-auto font-medium text-gray-600 text-[8px] lg:text-xs text-opacity-65 mb-4">
            Delivery varies by order volume and production traffic. Order
            protection for upto 30 days. Included free shipping and free 30-day
            return.{" "}
            <Link href="/terms" className="underline hover:no-underline">
              Terms and policies
            </Link>{" "}
            apply.
          </p>
        </div>
        <div className="w-full lg:w-2/3">
          <div className="w-full bg-white rounded-t-xl h-72"></div>
        </div>
      </section>
    </main>
  );
}
