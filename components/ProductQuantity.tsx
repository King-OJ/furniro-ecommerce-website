"use client";

import React, { useState } from "react";

export default function ProductQuantity() {
  const [productQty, setProductQty] = useState(1);

  return (
    <button className="space-x-6 rounded-md border border-lightAsh p-2 font-semibold">
      <span
        className={productQty === 1 ? "font-normal" : "font-semibold"}
        onClick={() => {
          if (productQty === 1) {
            return;
          }
          setProductQty(productQty - 1);
        }}
      >
        -
      </span>
      <span>{productQty}</span>
      <span
        className=" "
        onClick={() => {
          setProductQty(productQty + 1);
        }}
      >
        +
      </span>
    </button>
  );
}
