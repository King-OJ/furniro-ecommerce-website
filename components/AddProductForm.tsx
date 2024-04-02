"use client";

import { toast } from "sonner";
import AddDiscount from "./AddDiscount";
import FormSubmitBtn from "./FormSubmitBtn";
import { useFormState } from "react-dom";
import { useEffect, useTransition } from "react";
import FormRow from "./FormRow";

const initialState = {
  message: "",
};

export default function AddProductForm({
  addProduct,
}: {
  addProduct: (formData: FormData) => Promise<void>;
}) {
  //   const [state, formAction] = useFormState(addProduct, initialState);
  let [isPending, startTransition] = useTransition();

  const onSubmit = (formData: FormData) => {
    // RUN SOME VALIDATION HERE

    startTransition(async () => {
      await addProduct(formData);
      toast("Product added succesfully!");
    });
  };

  return (
    <form action={onSubmit} className="space-y-3 md:space-y-5">
      <FormRow
        title="product name"
        name="name"
        type="text"
        required
        autoCapitalize="on"
      />
      <FormRow
        title="product title"
        name="title"
        type="text"
        required
        autoCapitalize="on"
      />
      <FormRow
        textArea
        title="product description"
        name="description"
        type="text"
        required
        autoCapitalize="on"
      />

      <input
        required
        type="file"
        className="file-input file-input-bordered w-full max-w-xs"
        name="image"
      />
      {/* <DragAndDrop /> */}
      <FormRow
        title="product price"
        required
        name="price"
        type="number"
        placeholder="Price"
        className="input input-bordered w-full"
      />

      <AddDiscount />

      <FormSubmitBtn className="btn-primary btn-block rounded-none text-white">
        Add Product
      </FormSubmitBtn>
    </form>
  );
}
