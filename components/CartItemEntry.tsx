"use client";
import { BsTrash } from "react-icons/bs";
import { CartItemWithProduct } from "@/utils/db/cart";
import ImgContainer from "./ImgContainer";
import { formatPrice } from "@/utils/formatPrice";
import DeleteFromCartBtn from "./DeleteFromCartBtn";
import { useTransition } from "react";
import { toast } from "sonner";
import Link from "next/link";

export default function CartItemEntry({
  cartItem,
  setProductQuantity,
  removeFromCart,
}: {
  cartItem: CartItemWithProduct;
  setProductQuantity: (productId: string, quantity: number) => Promise<void>;
  removeFromCart: (productId: string, path: string) => Promise<void>;
}) {
  const [isPending, startTransition] = useTransition();

  const { product, quantity } = cartItem;
  const { name, imageUrl, price, id } = product;

  const quantityOptions: JSX.Element[] = [];

  for (let index = 1; index <= 10; index++) {
    quantityOptions.push(
      <option value={index} key={index}>
        {index}
      </option>,
    );
  }

  return (
    <li className="grid grid-cols-5 gap-2">
      <ImgContainer product={product} />
      <Link
        href={`/shop/${product.id}`}
        className="self-center text-sm text-thickAsh"
      >
        {name}
      </Link>
      <div className="self-center text-sm text-thickAsh">
        {formatPrice(price)}
      </div>
      <select
        onChange={(e) => {
          const newQuantity = parseInt(e.target.value);
          startTransition(async () => {
            await setProductQuantity(id, newQuantity);
            toast("Item quantity changed");
          });
        }}
        defaultValue={quantity}
        id="quantity"
        name="quantity"
        className="select select-bordered h-[2rem] min-h-[2rem] max-w-[3.5rem] self-center  px-2 text-sm text-thickAsh"
      >
        {quantityOptions}
      </select>
      <div className="flex items-center justify-between self-center text-sm text-thickAsh">
        {formatPrice(price * quantity)}
        <DeleteFromCartBtn
          Icon={BsTrash}
          productId={id}
          removeFromCart={removeFromCart}
        />
      </div>
    </li>
  );
}
