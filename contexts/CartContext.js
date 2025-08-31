"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    quick: null,
    items: [],
  });
  const [maxCountReached, setMaxCountReached] = useState(false);
  const [itemAddedToCart, setItemAddedToCart] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("HookyCart");
    if (storedCart) {
      setCart((prev) => JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (cart.items.length > 0) {
        localStorage.setItem("HookyCart", JSON.stringify(cart));
      } else {
        localStorage.removeItem("HookyCart");
      }
    }
  }, [cart]);

  const addToCart = (itm) => {
    let items = cart.items;
    let repeat = false;
    if (items.length > 0) {
      for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (
          item.title == itm.title &&
          item.url == itm.url &&
          item.price == itm.price &&
          item.model == itm.model &&
          item.checkOutOptions.length == itm.checkOutOptions.length &&
          item.checkOutOptions.filter(
            (i, _) =>
              itm.checkOutOptions.filter((j, _) => j.title == i.title).length >
              0
          ).length == item.checkOutOptions.length
        ) {
          // if (
          //   (item.title == "PRO" &&
          //     Number(item.count) + Number(itm.count) > 50) ||
          //   (item.title != "PRO" && Number(item.count) + Number(itm.count) > 5)
          // ) {
          //   repeat = true;
          //   setMaxCountReached(true);
          //   setTimeout(() => {
          //     setMaxCountReached(false);
          //   }, 2000);
          // } else {
            items[i] = {
              ...item,
              count: Number(item.count) + Number(itm.count),
            };
            repeat = true;
            setItemAddedToCart(true);
          // }
        }
      }
      if (!repeat) {
        items = [...items, itm];
        setItemAddedToCart(true);
      }
    } else {
      items = [itm];
      setItemAddedToCart(true);
    }
    setCart((prev) => {
      prev.items = items;
      return { ...prev };
    });
    setTimeout(() => {
      setItemAddedToCart(false);
    }, 2000);
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      prev.items = prev.items.filter((item) => item.id !== id);
      return { ...prev };
    });
  };

  const decItemCount = (id) => {
    let items = cart.items;
    if (items.length > 0) {
      for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (item.id == id) {
          if (item.count > 1) {
            items[i] = {
              ...item,
              count: Number(item.count) - items[i].countStep,
            };
          } else {
            items[i] = { ...item, count: 0 };
          }
          setCart((prev) => {
            prev.items = items.filter((item) => item.count !== 0);
            return { ...prev };
          });
        }
      }
    } else {
      setCart((prev) => {
        prev.items = [];
        return { ...prev };
      });
    }
    // setCart((prevCart) => [...prevCart, itm]);
  };

  const addReserve = (itm) => {
    setCart((prev) => {
      prev.quick = itm;
      return { ...prev };
    });
  };

  const removeReserve = () => {
    setCart((prev) => {
      prev.quick = null;
      return { ...prev };
    });
  };

  const clearCart = () => setCart({ quick: null, items: [] });

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        decItemCount,
        addReserve,
        removeReserve,
      }}
    >
      {/* cart notifications */}
      {itemAddedToCart && (
        <div className="notification success animate__animated animate__fadeInDown animate__faster">
          <p>Item added to cart.</p>
        </div>
      )}
      {maxCountReached && (
        <div className="notification warning animate__animated animate__fadeInDown animate__faster">
          Max allowed purchase quantity surpassed.
        </div>
      )}
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
