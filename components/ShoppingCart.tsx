"use client";

import { ShoppingCart as ShoppingCartType } from "@/utils/db/cart";
import { formatPrice } from "@/utils/formatPrice";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsCartX } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";
import ImgContainer from "./ImgContainer";
import DeleteFromCartBtn from "./DeleteFromCartBtn";

interface ShoppingCartProps {
  isCartModalOpen: boolean;
  closeCartModalOpen: () => void;
  cart: ShoppingCartType | null;
  removeFromCart: (productId: string, path: string) => Promise<void>;
}

export default function ShoppingCart({
  isCartModalOpen,
  closeCartModalOpen,
  cart,
  removeFromCart,
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
      // onClick={closeModal}
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
          <div className="flex min-h-64 min-w-80 flex-col justify-between bg-white py-4">
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
              {cart?.items.length > 0 ? (
                <ul className="my-4 w-full space-y-3">
                  {cart?.items.map((item) => {
                    const { product, quantity } = item;
                    const { name, price, id } = product;

                    return (
                      <li
                        key={item.id}
                        className="flex items-center justify-between space-x-1"
                      >
                        <div className="flex items-center space-x-2">
                          <ImgContainer product={product} />
                          <div className="space-y-2 text-xs">
                            <Link
                              href={`/shop/${id}`}
                              className="font-semibold"
                              onClick={() => {
                                setShowModal(false);
                                setTimeout(() => {
                                  closeCartModalOpen();
                                }, 500);
                              }}
                            >
                              {name}
                            </Link>
                            <div className="flex items-center space-x-1">
                              <p>{quantity}</p>
                              <span>X</span>
                              <p className="text-primaryColor">
                                {formatPrice(price || 0)}
                              </p>
                            </div>
                          </div>
                        </div>

                        <DeleteFromCartBtn
                          removeFromCart={removeFromCart}
                          Icon={IoCloseCircle}
                          productId={id}
                        />
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="mt-4 text-xs md:text-sm">You cart is empty</p>
              )}
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
                    className={
                      cart?.items.length < 1
                        ? "btn btn-disabled btn-outline rounded-full px-3 text-xs"
                        : "btn btn-outline rounded-full px-3 text-xs"
                    }
                    style={{
                      pointerEvents: cart?.items.length < 1 ? "none" : "auto",
                    }}
                  >
                    View cart
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      setShowModal(false);
                      setTimeout(() => {
                        closeCartModalOpen();
                      }, 500);
                    }}
                    href="/checkout"
                    style={{
                      pointerEvents: cart?.items.length < 1 ? "none" : "auto",
                    }}
                    className={
                      cart?.items.length < 1
                        ? "btn btn-disabled btn-outline  rounded-full px-3 text-xs"
                        : "btn btn-outline  rounded-full px-3 text-xs"
                    }
                  >
                    Checkout
                  </Link>
                </li>
                <li>
                  <button
                    disabled={cart?.items.length < 1}
                    className="btn btn-outline  rounded-full px-3 text-xs"
                  >
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
