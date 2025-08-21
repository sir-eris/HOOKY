import { OrderBuyCard } from "../../../components/orderBuyCard";

export const metadata = {
  title: "Disposable Trays - The Nuclear Productivity Explosion",
  description: "Disposable Pre-Packed Trays™ are ready to use disposable hookah bowls with already-filled compound (shisha) ready to be served. Available in over 10 flavors.",
};

export default function DisposableTray() {
  const countOptions = [
    {
      id: 1,
      title: "Pack of 24",
      count: 24,
      is_available: true,
      selected: true,
    },
    {
      id: 2,
      title: "Pack of 48",
      count: 48,
      is_available: true,
      selected: false,
    },
    {
      id: 3,
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
      title: "Watermelon",
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
      title: "Mint",
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
      title: "Grape",
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
      title: "Apple",
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
      title: "Orange",
      thumbnail: "#FB5607",
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
      title: "Tea",
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
      title: "Ice",
      thumbnail: "#3A86FF",
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
      id: 7,
      is_default: false,
      title: "Cream",
      thumbnail: "#8338EC",
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
      id: 8,
      is_default: false,
      title: "Cherry",
      thumbnail: "#FF006E",
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
      id: 9,
      is_default: false,
      title: "Vanilla",
      thumbnail: "#FFBE0B",
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
      id: 10,
      is_default: false,
      title: "Strawberry",
      thumbnail: "#E63946",
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
      id: 11,
      is_default: false,
      title: "Mango",
      thumbnail: "#7CB518",
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
    price: "3.49",
    title: "Disposable Pre-Packed Trays",
    tagline: "One. Two. Puff.",
    checkOutNotes: ["Delivery varies by order volume and production traffic.", "Order protection for upto 30 days.", "Included free shipping and free 30-day return."],
    disclaimers:
      "Voluptate laboris aliqua esse ea mollit labore commodo consequat excepteur id eiusmod irure dolor nulla. Ad proident reprehenderit deserunt tempor est mollit ad aute excepteur velit enim mollit dolore exercitation.",
    url: "/order/disposable-tray",
    type: "Accessory",
    countStep: 24,
  };

  return (
    <main>
      <OrderBuyCard item={item} checkOutOptions={checkOutOptions} models={models} countOptions={countOptions} />
    </main>
  );
}
