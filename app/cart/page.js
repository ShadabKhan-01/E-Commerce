"use client";
import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import Link from "next/link";

const Page = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <div className="min-h-[90svh]">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} setCart={setCart} />
          ))}
          <div className="flex justify-between mt-6">
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Clear Cart
            </button>
            <Link href="/checkout">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
