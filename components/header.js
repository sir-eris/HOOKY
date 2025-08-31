"use client";

import Link from "next/link";
import DropdownMenu from "./dropDownMenu.js";
import { useCart } from "../contexts/CartContext.js";

export default function Header({ params }) {
  const { cart } = useCart();

  return (
    <header className="fixed z-50 w-screen h-12 flex justify-between items-center text-xs px-8 lg:px-0 border-b drop-shadow-sm bg-[#f7f7f7]">
      <div className="lg:w-1/4 z-20">
        <Link href="/" className="flex justify-center items-center gap-x-2">
          <span className="flex justify-center items-center rounded-full bg-[#89FC00] hover:bg-[#70E000] transition-colors w-6 h-6 border">
            <span className="block w-4 h-4 rounded-full bg-[#F8F9FA]"></span>
          </span>
          <p className="text-left font-semibold text-[#4b4c4b]">HOOKY</p>
        </Link>
      </div>
      <div className="hidden lg:flex lg:w-1/2 justify-center items-center h-full gap-x-12">
        {/* <Link
          href="/breeze-two"
          className="flex items-center h-12 border-b-2 border-[#f7f7f7] hover:border-b-gray-500 transition-all"
        >
          Breeze 2
        </Link> */}
        <Link
          href="/pro"
          className="flex items-center h-12 border-b-2 border-[#f7f7f7] hover:border-b-gray-500 transition-all"
        >
          PRO
        </Link>
        <Link
          href="/accessories"
          className="flex items-center h-12 border-b-2 border-[#f7f7f7] hover:border-b-gray-500 transition-all"
        >
          Accessories
        </Link>
        <Link
          href="/order/status"
          className="flex items-center h-12 border-b-2 border-[#f7f7f7] hover:border-b-gray-500 transition-all"
        >
          Order Status
        </Link>
        <Link
          href="/cart"
          className="flex items-center h-12 border-b-2 border-[#f7f7f7] hover:border-b-gray-500 transition-all"
        >
          Cart
          <sup>
            <span
              className={`block ml-1 w-[6px] h-[6px] rounded-full transition-all bg-[#70e000] ${
                cart.items.length > 0 ? `opacity-100` : `opacity-0`
              }`}
            ></span>
          </sup>
        </Link>
      </div>
      <div className="lg:w-1/4">
        <DropdownMenu hasItem={cart.items.length} />
      </div>
    </header>
  );
}
