"use client";

import { useState, useTransition } from "react";

export default function AddToCart({
  productId,
  className,
  addToCart,
}: {
  productId: string;
  className: string;
  addToCart: (productId: string) => Promise<void>;
}) {
  const [isPending, startTransition] = useTransition();
  const [isItemAdded, setIsItemAdded] = useState(false);

  return (
    <button
      onClick={() => {
        setIsItemAdded(false);
        startTransition(async () => {
          await addToCart(productId);
          setIsItemAdded(true);
        });
      }}
      className={className}
    >
      Add To Cart{" "}
      {isPending && <span className="loading loading-spinner loading-xs" />}
    </button>
  );
}
