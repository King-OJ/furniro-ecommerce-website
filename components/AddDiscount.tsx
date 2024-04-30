"use client";

import { useState } from "react";
import FormRow from "./FormRow";

export default function AddDiscount() {
  const [showDiscountInput, setShowDiscountInput] = useState(true);
  return (
    <div className="space-y-3 md:space-y-5">
      <div className="form-control max-w-xs">
        <label className="label cursor-pointer">
          <span className="label-text">Add Discount ?</span>
          <input
            defaultChecked
            type="checkbox"
            onClick={() => setShowDiscountInput(!showDiscountInput)}
            className="checkbox-secondary checkbox checkbox-sm border-primaryColor"
          />
        </label>
      </div>

      {showDiscountInput && (
        <FormRow
          title="product discount"
          required
          name="discount"
          type="number"
          placeholder="Enter discount"
          className="input input-bordered w-full"
        />
      )}
    </div>
  );
}
