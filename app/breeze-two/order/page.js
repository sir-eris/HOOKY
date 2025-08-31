import { OrderBuyCard } from "../../../components/orderBuyCard";

export const metadata = {
  title: "Order Breeze 2 - The Latest Undisputed Champion",
  description:
    "Breeze 2 is the undisputed champion in electric hookahs. Easy to use with a mega battery pack, touchpad heat control, aerospace-grade aluminum body, and well-designed accessories",
};

export default function OrderBreezeTwo() {
  const checkOutOptions = [
    {
      id: 0,
      title: "50% More Battery",
      description: "Improved battery capacity with upgraded power management.",
      price: "$39.99",
      is_available: true,
      selected: false,
    },
    {
      id: 1,
      title: "50 Extra Tips",
      description: "Assortment of colorful exchangeable individually wrapped tips.",
      price: "$9.99",
      is_available: true,
      selected: false,
    },
  ];

  const models = [
    {
      id: 0,
      is_default: true,
      title: "Legacy Gray",
      thumbnail: "#777777",
      media: [
        { id: 5, type: "image", src: "/13.png" },
        { id: 2, type: "image", src: "/10.png" },
        { id: 1, type: "image", src: "/8.png" },
        { id: 0, type: "video", src: "", thumbnail: "/14.png" },
        { id: 3, type: "image", src: "/11.png" },
        { id: 4, type: "image", src: "/12.png" },
        { id: 6, type: "image", src: "/14.png" },
        { id: 7, type: "image", src: "/9.png" },
      ],
    },
    {
      id: 1,
      is_default: false,
      title: "Cosmic Salt",
      thumbnail: "#fbfbfb",
      media: [
        { id: 0, type: "video", src: "", thumbnail: "/14.png" },
        { id: 1, type: "image", src: "/8.png" },
        { id: 2, type: "image", src: "/10.png" },
        { id: 3, type: "image", src: "/11.png" },
        { id: 4, type: "image", src: "/12.png" },
        { id: 5, type: "image", src: "/13.png" },
        { id: 6, type: "image", src: "/14.png" },
        { id: 7, type: "image", src: "/9.png" },
      ],
    },
  ];

  const item = {
    price: "$199.99",
    tagline: "The Undisputed Champion",
    title: "Breeze 2",
    url: "/order/breeze-two",
    type: "device",
    checkOutNotes: [
      "Delivery begins Summer 2025.",
      "Customized Gift prep available at checkout.",
      "Cancel your order any time.",
      "Update your shipping address later.",
      "Included free shipping and free 30-day return.",
    ],
  };

  return (
    <main>
      <OrderBuyCard item={item} models={models} checkOutOptions={checkOutOptions} countOptions={[]} />
    </main>
  );
}
