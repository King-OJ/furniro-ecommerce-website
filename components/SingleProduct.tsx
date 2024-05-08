import { BsShare, BsFilter, BsHeart } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@prisma/client";
import { formatPrice } from "@/utils/formatPrice";
import AddToCart from "./AddToCart";

interface SingleProductProps {
  product: Product;
  addToCart: (productId: string, path: string) => Promise<void>;
  path: string;
}

export default function SingleProduct({
  product,
  addToCart,
  path,
}: SingleProductProps) {
  const {
    name,
    title,
    price,
    imageUrl,
    discount,
    id,
    createdAt,
    discountedPrice,
  } = product;

  //if the product was added less than 7 days ago then its new
  const isNewProduct =
    Date.now() - new Date(createdAt).getTime() < 1000 * 60 * 60 * 24 * 7;

  return (
    <li className="group w-full cursor-pointer bg-ashColor">
      <div className="relative">
        {/* overlay */}
        <div className="absolute bottom-0 left-0 right-0 hidden h-0 w-full overflow-hidden bg-black bg-opacity-40 transition-all duration-200 group-hover:z-10 group-hover:h-full md:block">
          <div className=" flex h-full w-full flex-col justify-center px-2">
            <AddToCart
              path={path}
              addToCart={addToCart}
              productId={id}
              className="btn w-full rounded-none px-3 py-[2px] text-sm font-semibold text-primaryColor disabled:bg-opacity-100"
            />
            <ul className="mt-3 flex items-center justify-between">
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
        <div
          className={`${!isNewProduct ? "justify-end" : "justify-between"} absolute left-2 right-2 top-2 flex items-center `}
        >
          {isNewProduct && (
            <div className="grid h-9 w-9 place-content-center self-start rounded-full bg-green bg-opacity-90 text-xs text-white">
              New
            </div>
          )}
          {discount > 0 && (
            <div className="grid h-9 w-9 place-content-center rounded-full bg-red bg-opacity-70 text-xs text-white">{`-${discount}%`}</div>
          )}
        </div>

        <Image
          src={imageUrl}
          priority
          width={0}
          height={0}
          sizes="100vw"
          alt={name}
          className="aspect-auto max-h-64 w-full object-cover md:h-auto"
        />
      </div>
      <Link href={`/shop/${id}`}>
        <div className="space-y-1 p-2 md:p-3">
          <h6 className="truncate text-sm font-bold capitalize md:text-base">
            {name}
          </h6>
          <p className="truncate text-xs text-thickAsh md:text-sm">{title}</p>
          {discount > 0 ? (
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold md:text-sm">
                {formatPrice(discountedPrice || price)}
              </p>

              <p className="text-xs font-bold text-lightAsh line-through md:text-sm">
                {formatPrice(price)}
              </p>
            </div>
          ) : (
            <p className="text-xs font-bold md:text-sm">{formatPrice(price)}</p>
          )}
        </div>
      </Link>
    </li>
  );
}
