import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default function ImgContainer({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.id}`}
      className="grid h-[50px] w-[50px] place-content-center overflow-hidden rounded-md "
    >
      <Image
        alt="furniro"
        src={product.imageUrl}
        height={0}
        width={0}
        sizes="100vw"
        className="h-auto w-auto object-cover"
      />
    </Link>
  );
}
