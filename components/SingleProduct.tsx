import { BsShare, BsFilter, BsHeart } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@prisma/client";

interface SingleProductProps {
  product: Product;
}

export default function SingleProduct({ product }: SingleProductProps) {
  const { name, title, price, imageUrl, discount, newProduct, id } = product;

  const newPrice = price - (discount / 100) * price;

  return (
    <li className="group w-full cursor-pointer bg-ashColor">
      <div className="relative">
        {/* overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-0 w-full overflow-hidden bg-black bg-opacity-40 transition-all duration-200 group-hover:z-10 group-hover:h-full">
          <div className="grid h-full w-full place-content-center">
            <button className="btn rounded-none px-6 py-1 text-sm font-semibold text-primaryColor">
              Add to cart
            </button>
            <ul className="mt-3 flex items-center space-x-4">
              <li className="flex items-center space-x-1 text-xs text-white">
                <BsShare />
                <span>Share</span>
              </li>
              <li className="flex items-center space-x-1 text-xs text-white">
                <BsFilter />
                <span>Compare</span>
              </li>
              <li className="flex items-center space-x-1 text-xs text-white">
                <BsHeart />
                <span>Like</span>
              </li>
            </ul>
          </div>
        </div>
        {discount > 0 && (
          <div className="absolute right-2 top-2 grid h-9 w-9 place-content-center rounded-full bg-red bg-opacity-70 text-xs text-white">{`-${discount}%`}</div>
        )}
        {newProduct && (
          <div className="absolute right-2 top-2 grid h-9 w-9 place-content-center rounded-full bg-green bg-opacity-90 text-xs text-white">
            New
          </div>
        )}
        <Image
          src={imageUrl}
          width={0}
          height={0}
          sizes="100vw"
          alt="furniro logo"
          className="aspect-auto h-auto w-full"
        />
      </div>
      <Link href={`/shop/${id}`}>
        <div className="space-y-1 p-3">
          <h6 className="font-bold capitalize">{name}</h6>
          <p className="text-xs text-thickAsh">{title}</p>
          {discount > 0 ? (
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold">{`$${newPrice}`}</p>

              <p className="text-xs font-bold text-lightAsh line-through">
                {`$${price}`}
              </p>
            </div>
          ) : (
            <p className="text-sm font-bold">{`$${price}`}</p>
          )}
        </div>
      </Link>
    </li>
  );
}
