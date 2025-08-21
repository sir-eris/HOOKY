"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function DropdownMenu({ hasItem }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => setIsOpen(false), [pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      e.preventDefault();
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsOpen(prev => !prev);

  const handleOnClick = (uri) => setTimeout(() => router.push(uri), 0);

  return (
    <div className="absolute lg:hidden left-0 h-12 top-0 w-screen">
      {/* Button to toggle dropdown */}
      <button
        className="w-fit h-12 absolute top-0 right-6 py-2"
        onClick={toggleMenu}
        ref={buttonRef}
      >
        <svg
          className={`w-6 h-6 text-gray-800 transition-transform ${
            isOpen && "rotate-90"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <line x1="4" y1="6" x2="20" y2="6" strokeLinecap="round" />
          <line
            name="menuToggle"
            x1="4"
            y1="12"
            x2="20"
            y2="12"
            strokeLinecap="round"
          />
          <line
            name="menuToggle"
            x1="4"
            y1="18"
            x2="20"
            y2="18"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div
        ref={dropdownRef}
        className={`absolute w-screen h-fit left-0 top-12 bg-[#f7f7f7] shadow-2xl transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className=" divide-gray-200">
          {/* <button
            onClick={() => handleOnClick("/breeze-two")}
            className="block w-full text-left border-b py-4 px-8"
          >
            Breeze 2
          </button> */}
          <button
            onClick={() => handleOnClick("/pro")}
            className="block w-full text-left border-b py-4 px-8"
          >
            PRO
          </button>
          <button
            onClick={() => handleOnClick("/accessories")}
            className="block w-full text-left border-b py-4 px-8"
          >
            Accessories
          </button>
          <button
            onClick={() => handleOnClick("/order/status")}
            className="block w-full text-left border-b py-4 px-8"
          >
            Order Status
          </button>
          <button
            onClick={() => handleOnClick("/cart")}
            className="flex w-full text-left border-b py-4 px-8"
          >
            Cart <sup> <span
                className={`block ml-1 w-[6px] h-[6px] rounded-full transition-all bg-[#70e000] ${
                  hasItem > 0 ? `opacity-100` : `opacity-0`
                }`}
              ></span>
            </sup>
          </button>
        </ul>
      </div>
    </div>
  );
}
