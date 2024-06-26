"use client";
import { useState } from "react";
import { BsCart } from "react-icons/bs";
import ShoppingCart from "./ShoppingCart";
import { ShoppingCart as ShoppingCartType } from "@/utils/db/cart";

interface ShoppingCartBtnProps {
  cart: ShoppingCartType | null;
  removeFromCart: (productId: string, path: string) => Promise<void>;
}

export default function ShoppingCartBtn({
  cart,
  removeFromCart,
}: ShoppingCartBtnProps) {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  return (
    <>
      <button
        className="btn btn-circle btn-ghost relative text-lg hover:bg-lighterCream"
        onClick={() => {
          setIsCartModalOpen(true);
        }}
      >
        <BsCart />
        <span className="badge badge-xs absolute bottom-1 right-0">
          {cart?.totalItems || 0}
        </span>
      </button>
      <ShoppingCart
        removeFromCart={removeFromCart}
        cart={cart}
        isCartModalOpen={isCartModalOpen}
        closeCartModalOpen={() => setIsCartModalOpen(false)}
      />
    </>
  );
}
