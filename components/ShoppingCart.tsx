"use client";

import { ShoppingCart as ShoppingCartType } from "@/utils/db/cart";
import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsCartX } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";

interface ShoppingCartProps {
  isCartModalOpen: boolean;
  closeCartModalOpen: () => void;
  cart: ShoppingCartType | null;
}

export default function ShoppingCart({
  isCartModalOpen,
  closeCartModalOpen,
  cart,
}: ShoppingCartProps) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isCartModalOpen) {
      setTimeout(() => {
        setShowModal(true);
      }, 500);
    }
  }, [isCartModalOpen]);

  function closeModal() {
    setShowModal(false);
    setTimeout(() => {
      closeCartModalOpen();
    }, 500);
  }

  return (
    <div
      onClick={closeModal}
      className={
        isCartModalOpen
          ? "fixed bottom-0 left-0 right-0 top-0 z-30 bg-black bg-opacity-30 transition-all duration-200"
          : "hidden transition-all duration-200"
      }
    >
      <div className="relative h-full">
        <div
          className={
            showModal
              ? "absolute right-0 top-0 h-full transition-all duration-200"
              : "absolute right-0 top-full h-0 transition-all duration-200"
          }
        >
          <div className="flex min-h-96 min-w-80 flex-col justify-between bg-white py-4">
            <div className="px-4">
              <div className="flex items-start justify-between">
                <h5 className="flex-1 border-b border-lightAsh pb-4 font-semibold">
                  Shopping Cart
                </h5>
                <button
                  className="pl-6 pt-1 text-lg text-lightAsh"
                  onClick={() => {
                    setShowModal(false);
                    setTimeout(() => {
                      closeCartModalOpen();
                    }, 500);
                  }}
                >
                  <BsCartX fill="#898989" />
                </button>
              </div>
              <ul className="mt-4 w-full space-y-3">
                {cart?.items.map((item) => {
                  const { product, quantity } = item;
                  const { name, price, imageUrl } = product;

                  return (
                    <li
                      key={item.id}
                      className="flex items-center justify-between space-x-1"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="grid h-[50px] w-[50px] place-content-center overflow-hidden rounded-md ">
                          <Image
                            alt="furniro"
                            src={imageUrl}
                            height={0}
                            width={0}
                            sizes="100vw"
                            className="h-auto w-auto object-cover"
                          />
                        </div>
                        <div className="space-y-2 text-xs">
                          <h6 className="font-semibold">{name}</h6>
                          <div className="flex items-center space-x-1">
                            <p>{quantity}</p>
                            <span>X</span>
                            <p className="text-primaryColor">
                              {formatPrice(price || 0)}
                            </p>
                          </div>
                        </div>
                      </div>

                      <IoCloseCircle fill="#898989" />
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <div className="flex items-center space-x-3 px-4 pb-4 text-sm">
                <p className="font-semibold">Subtotal :</p>
                <p className="text-primaryColor">
                  {formatPrice(cart?.subTotal || 0)}
                </p>
              </div>

              <ul className="flex items-center justify-between border-t border-lightAsh px-4 pt-3">
                <li>
                  <Link
                    onClick={() => {
                      setShowModal(false);
                      setTimeout(() => {
                        closeCartModalOpen();
                      }, 500);
                    }}
                    href="/cart"
                    className="btn btn-outline h-6 min-h-6 rounded-full px-3 text-xs"
                  >
                    View cart
                  </Link>
                </li>
                <li>
                  <button className="btn btn-outline h-6 min-h-6 rounded-full px-3 text-xs">
                    Checkout
                  </button>
                </li>
                <li>
                  <button className="btn btn-outline h-6 min-h-6 rounded-full px-3 text-xs">
                    Comparison
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
