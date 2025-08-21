import AccessoriesCard from "../../components/accessoriesCard";

export const metadata = {
  title: "Accessories - HOOKY",
  description: "Customize your device to your liking.",
};

async function stripeCheckout(item) {
  const response = await fetch("/api/order/checkout/quick", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...item }),
  });
  const data = await response.json();
  if ("error" in data) {
    return false;
  }
  window.location.href = data.url;
  return true;
}

export default function Accessories() {
  const data = [
    {
      id: 0,
      title: "Spare Tray",
      price: "$29.99",
      images: ["11.png", "12.png", "13.png", "14.png"],
      checkoutNotes: [
        "Original Breeze 2 Tray.",
        "Included free shipping and free 30-day return.",
        "Delivery begins Summer 2025.",
      ],
      is_available: true,
    },
    {
      id: 1,
      title: "Spare Damper",
      price: "$34.99",
      images: ["11.png", "12.png", "13.png", "14.png"],
      checkoutNotes: [
        "Original Breeze 2 Damper.",
        "Included free shipping and free 30-day return.",
        "Delivery begins Summer 2025.",
      ],
      is_available: false,
    },
    {
      id: 2,
      title: "Pack of 50 Tips",
      price: "$9.99",
      images: ["11.png", "12.png", "13.png", "14.png"],
      checkoutNotes: [
        "Colorful assortment of individually wrapped Hooky Tips.",
        "Included free shipping and free 30-day return.",
        "Delivery begins Summer 2025.",
      ],
      is_available: false,
    },
    {
      id: 3,
      title: "Pack of 150 Tips",
      price: "$39.99",
      images: ["11.png", "12.png", "13.png", "14.png"],
      checkoutNotes: [
        "Colorful assortment of individually wrapped Hooky Tips.",
        "Included free shipping and free 30-day return.",
        "Delivery begins Summer 2025.",
      ],
      is_available: false,
    },
    {
      id: 4,
      title: "Pack of 350 Tips",
      price: "$59.99",
      images: ["11.png", "12.png", "13.png", "14.png"],
      checkoutNotes: [
        "Colorful assortment of individually wrapped Hooky Tips.",
        "Included free shipping and free 30-day return.",
        "Delivery begins Summer 2025.",
      ],
      is_available: false,
    },
    {
      id: 5,
      title: "100 Inch Premium Air Hose",
      price: "$49.99",
      images: ["11.png", "12.png", "13.png", "14.png"],
      checkoutNotes: [
        "Maximum flexibility with wide range or motion made for Breeze 2.",
        "Included free shipping and free 30-day return.",
        "Delivery begins Summer 2025.",
      ],
      is_available: false,
    },
    {
      id: 6,
      title: "Air Hose Handle Sleeve",
      price: "$34.99",
      images: ["11.png", "12.png", "13.png", "14.png"],
      checkoutNotes: [
        "Stylish custom-made sleeve for Breeze 2 Handle.",
        "Included free shipping and free 30-day return.",
        "Delivery begins Summer 2025.",
      ],
      is_available: false,
    },
    {
      id: 7,
      title: "Handle Cooler",
      price: "$79.99",
      images: ["11.png", "12.png", "13.png", "14.png"],
      checkoutNotes: [
        "Integrated cooler made for Breeze 2 Handle.",
        "Lasts for upto 3 sessions.",
        "Included free shipping and free 30-day return.",
        "Delivery begins Summer 2025.",
      ],
      is_available: false,
    },
    {
      id: 8,
      title: "High Performance Damper",
      price: "$34.99",
      images: ["11.png", "12.png", "13.png", "14.png"],
      checkoutNotes: [
        "Advanced design unleashes maximum delivery.",
        "Reduces power consumption by 30%.",
        "Reflects upto 90% of heat.",
        "Included free shipping and free 30-day return.",
        "Delivery begins Summer 2025.",
      ],
      is_available: false,
    },
    {
      id: 9,
      title: "Set of Base Grips",
      price: "$14.99",
      images: ["11.png", "12.png", "13.png", "14.png"],
      checkoutNotes: [
        "Custom designed grips for increased safety.",
        "Set of 4.",
        "Included free shipping and free 30-day return.",
        "Delivery begins Summer 2025.",
      ],
      is_available: false,
    },
    {
      id: 10,
      title: "Set of Premium Metal Tips",
      price: "$39.99",
      images: ["11.png", "12.png", "13.png", "14.png"],
      checkoutNotes: [
        "Limited edition carefully machined and finished multi-use Hooky Tips.",
        "Included free shipping and free 30-day return.",
        "Delivery begins Summer 2025.",
      ],
      is_available: false,
    },
    // {
    //   id: 11,
    //   title: "10 ft Long Charging Cable",
    //   price: "$24.99",
    //   images: ["11.png", "12.png", "13.png", "14.png"],
    //   checkoutNotes: [
    //     "Extra long Breeze 2 magnetic charging cable.",
    //     "Included free shipping and free 30-day return.",
    //     "Delivery begins Summer 2025.",
    //   ],
    //   is_available: false,
    // },
    // {
    //   id: 12,
    //   title: "Pre-packed Water Replacement Pouches",
    //   price: "$9.99",
    //   images: ["11.png", "12.png", "13.png", "14.png"],
    //   checkoutNotes: [
    //     "Pack of 12 single-use sealed disposable purified water pouches.",
    //     "Included free shipping and free 30-day return.",
    //     "Delivery begins Summer 2025.",
    //   ],
    //   is_available: false,
    // },
    // {
    //   id: 13,
    //   title: "Replacement Air Hose for Breeze 2",
    //   price: "$39.99",
    //   images: ["11.png", "12.png", "13.png", "14.png"],
    //   checkoutNotes: [
    //     "Original Breeze 2 Air Hose.",
    //     "Included free shipping and free 30-day return.",
    //     "Delivery begins Summer 2025.",
    //   ],
    //   is_available: false,
    // },
    {
      id: 14,
      title: "Premium Air Hose Handle",
      price: "$49.99",
      images: ["11.png", "12.png", "13.png", "14.png"],
      checkoutNotes: [
        "Original Breeze 2 Handle.",
        "Included free shipping and free 30-day return.",
        "Delivery begins Summer 2025.",
      ],
      is_available: false,
    },
  ];

  return (
    <main className="pt-12">
      <section className="w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-2">
        {data && data.map((item, _) => <AccessoriesCard key={_} item={item} index={_} length={data.length} />)}
      </section>
    </main>
  );
}
