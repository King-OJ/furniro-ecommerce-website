"use client";

import { useTransition } from "react";
import { toast } from "sonner";

export default function AddToCart({
  productId,
  className,
  addToCart,
  path,
}: {
  productId: string;
  className: string;
  addToCart: (productId: string, path: string) => Promise<void>;
  path: string;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => {
        startTransition(async () => {
          await addToCart(productId, path);
          toast.success("Item has been added to cart!");
        });
      }}
      className={className}
      disabled={isPending}
    >
      {isPending ? (
        <span className="flex items-center space-x-1">
          <span>Adding to Cart</span>
          <span className="loading loading-spinner loading-xs" />
        </span>
      ) : (
        "Add To Cart"
      )}
    </button>
  );
}
