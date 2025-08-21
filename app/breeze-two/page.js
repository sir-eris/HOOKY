import Product from "../../components/product"
import Link from "next/link";

export const metadata = {
  title: "Breeze 2 - HOOKY",
  description: "Breeze 2 is second-generation electric hookah developed by HOOKY with multi-touch controls, 3 sessions of charge, a tough heating element starting from $199.99.",
};

export default function Breeze2() {
  const data = [
    {
      id: 0,
      title: "Built To Last A Lifetime",
      subTitle: "Breeze 1 + 1",
      description: [
        "Recycled Aerospace-grade Aluminum machined to perfection. Finely textured by micro-particles to achieve a smooth finish. Anodized with a series of coatings for extra durability and an even silkier feel.",
      ],
      link: {
        title: "Explore Available Trims",
        uri: "/order/pro",
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
  ];

  return (
    <main className="pt-12 overflow-hidden">
      <Product data={data} />

      <section className="flex flex-col lg:flex-row min-h-96 w-screen lg:px-40 pb-16">
        <div className="w-2/3 mx-auto text-center lg:text-left lg:w-1/3">
          <h1 className="wb text-lg lg:text-xl font-bold text-[#70E000] mb-2 lg:mb-4 drop-shadow-sm">
            $199.99
          </h1>
          <h2 className="text-xl lg:text-3xl mb-2 lg:mb-4 font-normal">
            <span className="block">The Latest</span>
            <span className="text-[#70E000] font-semibold">
              Undisputed
            </span>{" "}
            <span className="">Champion</span>
          </h2>
          <h3 className="mb-12 lg:mb-36 text-[10px] lg:text-sm">
            For streamliners who savor the moment.
          </h3>

          <Link
            href="/order/breeze-two"
            className="block mx-auto lg:mx-0 w-fit text-base lg:text-lg font-semibold text-[#70E000] underline underline-offset-4 hover:no-underline mb-4 lg:mb-6"
          >
            Order Now
          </Link>
          <p className="font-medium text-gray-600 text-[8px] lg:text-xs text-opacity-65 mb-4">
            Delivery begins Summer 2025. Cancel your order any time. Included
            free shipping and free 30-day return.{" "}
            <Link href="/terms" className="underline hover:no-underline">
              Terms and policies
            </Link>{" "}
            apply.
          </p>
        </div>
        <div className="w-full lg:w-2/3"></div>
      </section>
    </main>
  );
}
