"use client";

import { CartItemWithProduct } from "@/utils/db/cart";
import ImgContainer from "./ImgContainer";
import { formatPrice } from "@/utils/formatPrice";
import DeleteFromCartBtn from "./DeleteFromCartBtn";

export default function CartItemEntry({
  cartItem,
}: {
  cartItem: CartItemWithProduct;
}) {
  const { product, quantity } = cartItem;
  const { name, imageUrl, price, id } = product;

  return (
    <li className="grid grid-cols-5 gap-2">
      <ImgContainer imageUrl={imageUrl} />
      <div className="self-center text-sm text-thickAsh">{name}</div>
      <div className="self-center text-sm text-thickAsh">
        {formatPrice(price)}
      </div>
      <input
        defaultValue={quantity}
        className="input input-bordered h-[2rem] min-h-[2rem] w-auto max-w-[2.5rem] self-center px-2 text-sm text-thickAsh"
      />
      <div className="flex items-center justify-between self-center text-sm text-thickAsh">
        {formatPrice(price * quantity)}
        <DeleteFromCartBtn id={id} />
      </div>
    </li>
  );
}
