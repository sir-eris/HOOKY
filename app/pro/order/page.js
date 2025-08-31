import { OrderBuyCard } from "../../../components/orderBuyCard";

export const metadata = {
  title: "Buy HOOKY PRO - A Leap Forward In Commercial Servicing",
  description: "HOOKY PRO is a commercial-grade electric hookah for hookah bars and hookah lounges. Easy to serve with an integrated dual battery pack, automatic host control, commercial-grade technology, and performance accessories.",
};

export default function OrderPro() {
  const countOptions = [
    {
      id: 0,
      title: "Pack of 4",
      count: 4,
      is_available: true,
      selected: true,
    },
    {
      id: 1,
      title: "Pack of 8",
      count: 8,
      is_available: true,
      selected: false,
    },
    {
      id: 2,
      title: "Pack of 12",
      count: 12,
      is_available: true,
      selected: false,
    },
    {
      id: 3,
      title: "Pack of 24",
      count: 24,
      is_available: true,
      selected: false,
    },
    {
      id: 4,
      title: "Pack of 48",
      count: 48,
      is_available: true,
      selected: false,
    },
    {
      id: 5,
      title: "Pack of 96",
      count: 96,
      is_available: true,
      selected: false,
    },
  ];

  const checkOutOptions = [];

  const models = [
    {
      id: 0,
      is_default: true,
      title: "Legacy Gray",
      thumbnail: "#777777",
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
    {
      id: 2,
      is_default: false,
      title: "Galactic Black",
      thumbnail: "#2b2b2b",
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
    {
      id: 3,
      is_default: false,
      title: "Arctic Blue",
      thumbnail: "#1E96FC",
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
    {
      id: 4,
      is_default: false,
      title: "Tropic Green",
      thumbnail: "#004B23",
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
    {
      id: 5,
      is_default: false,
      title: "Lush Nude",
      thumbnail: "#DDA15E",
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
    {
      id: 6,
      is_default: false,
      title: "Milky Rose",
      thumbnail: "#FF499E",
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
    currency: "$",
    price: "799",
    title: "Hooky PRO",
    tagline: "A Leap Forward In Commercial Servicing",
    checkOutNotes: ["Delivery varies by order volume and production traffic.", "Order protection for upto 30 days.", "Included free shipping and free 30-day return."],
    url: "/pro/order",
    type: "device",
    countStep: 4,
  };

  return (
    <main>
      <OrderBuyCard item={item} checkOutOptions={checkOutOptions} models={models} countOptions={countOptions} />
    </main>
  );
}
