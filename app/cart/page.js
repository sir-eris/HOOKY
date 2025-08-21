"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "../../context/CartContext";
import { Trash, Loader } from "lucide-react";

const CartPage = () => {
  const router = useRouter();
  const { cart, decItemCount, removeReserve } = useCart();

  const handleDecItem = (id) => {
      decItemCount(id);
  }

  const handleCheckOut = (e) => {
    e.preventDefault();
    // removeReserve();
    sessionStorage.setItem("checkoutStarted", "true");
    router.push("/order/checkout");
  }

  return (
    <main className="pt-12">
      {cart.items.length === 0 ? (
        <section className="min-h-96 w-1/2 lg:w-1/3 mx-auto flex flex-col justify-center items-center py-16 bg-[url('/.png')] bg-no-repeat bg-center bg-contain">
          <div className="w-full mb-12">
            <h1 className="font-normal text-[14pt] uppercase mb-4 text-center w-full">
              Add items to your cart
            </h1>
            <h2 className="text-[10pt] text-slate-600 font-medium text-center">
              Discover high performance{" "}
              <Link
                href="/accessories"
                className="underline hover:no-underline"
              >
                Accessories
              </Link>
              . Explore{" "}
              <Link href="/order/pro" className="underline hover:no-underline">
                Hooky PRO
              </Link>
              . Buy more{" "}
              <Link href="/order/disposable-tray" className="underline hover:no-underline">
                Disposable Pre-Packed Trays
              </Link>
              .
            </h2>
          </div>
        </section>
      ) : (
        <section className="min-h-96 w-full px-6 lg:px-0 lg:w-2/5 mx-auto flex flex-col justify-start items-center py-16 bg-[url('/.png')] bg-no-repeat bg-center bg-contain">
          <div className="w-full mb-12">
            <h1 className="font-normal text-[14pt] uppercase mb-4 text-center w-full">
              Finalize Your Cart, Prepare to pay!
            </h1>
            <h2 className="text-[10pt] text-slate-600 font-medium">
              Review each item and confirm your order. Payment method will be
              charged at the time of shipping. You will receive confirmation of
              your order with tracking information.
            </h2>
            {cart.items.filter((item, _) => item.title == "PRO").length ? (
              <p className="w-full flex gap-x-2 mt-6 text-sm text-[#70e000] font-semibold">
                <Loader color="#70e000" />
                <span className="pt-[2px]">
                  PRO customers, prepare your business information.
                </span>
              </p>
            ) : null}
          </div>
          <div className="w-full mb-24">
            <div>
              <small className="block mb-3">Summary:</small>
            </div>

            {cart.items.filter((item, _) => !item?.reserve).map((item, _) => (
              <Link key={item.id + _} href={item.url}>
                <div className="flex justify-between items-start py-2 border-b hover:bg-gray-100 transition-all">
                  <div className="inline-block w-[15%] lg:w-[12%] aspect-square rounded bg-gray-100"></div>
                  <span className="inline-block w-[9%] lg:w-[10%] text-xs lg:text-sm text-center">
                    {item.count}x
                  </span>
                  <div className="inline-block w-[65%] lg:w-[67%] text-left text-xs lg:text-sm">
                    <p>
                      {item.title}{item.model ? " in " + item.model : null}
                    </p>
                    {item.checkOutOptions.length > 0
                      ? item.checkOutOptions.map((option, _) => (
                          <span key={_} className="block text-gray-500">
                            {option.title}
                          </span>
                        ))
                      : null}
                  </div>
                  <div className="inline-block w-[22%] text-xs lg:text-sm">
                    <p>{item.price}</p>
                    {item.checkOutOptions.length > 0
                      ? item.checkOutOptions.map((option, _) => (
                          <p key={_} className="text-gray-500">
                            {option.price}
                          </p>
                        ))
                      : null}
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleDecItem(item.id);
                    }}
                    className="inline-block w-[6%] mr-1"
                  >
                    <Trash
                      size={14}
                      color="black"
                      className="ml-auto rounded-full icon-hov"
                    />
                  </button>
                </div>
              </Link>
            ))}

            <div className="flex justify-between items-end mt-12 lg:mt-6 mb-1 text-xs lg:text-sm">
              <p>Subtotal</p>
              <p>
                ${cart.items
                  .reduce(
                    (sum, item) =>
                      sum +
                      Number(item.price) * item.count +
                      item.checkOutOptions.reduce(
                        (s, i) => s + Number(i.price),
                        0
                      ),
                    0
                  )
                  .toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between items-end text-xs lg:text-sm">
              <p>Tax</p>
              <p>
                <i>Calculate at checkout</i>
              </p>
            </div>
            <div className="flex justify-between items-end text-xs lg:text-sm">
              <p>Shipping</p>
              <p>
                <i>Included</i>
              </p>
            </div>
          </div>

          <div className="w-full mb-4 pb-8">
            <button
              onClick={(e) => handleCheckOut(e)}
              className="block w-fit ml-auto text-nowrap text-lg font-semibold text-[#70E000] underline underline-offset-4 hover:no-underline"
            >
              Continue To Checkout
            </button>
          </div>
        </section>
      )}
    </main>
  );
};

export default CartPage;
