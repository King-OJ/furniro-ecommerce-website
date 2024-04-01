import AddDiscount from "@/components/AddDiscount";
import DragAndDrop from "@/components/DragAndDrop";
import FormSubmitBtn from "@/components/FormSubmitBtn";
import { addProduct } from "@/utils/actions";

export const metadata = {
  title: "Add Product - Furniro",
  description: "Add a product",
};

export default function page() {
  return (
    <div className="px-4 py-10 md:px-10">
      <h1 className="mb-4 text-center md:text-2xl">Add Product</h1>
      <form action={addProduct} className="space-y-3 md:space-y-5">
        <input
          required
          name="name"
          type="text"
          placeholder="Product Name"
          className="input input-bordered w-full"
          autoCapitalize="on"
        />
        <input
          required
          name="title"
          type="text"
          placeholder="Product Title"
          className="input input-bordered w-full"
          autoCapitalize="on"
        />
        <textarea
          name="description"
          required
          placeholder="Product Description"
          className="textarea textarea-bordered w-full"
        ></textarea>
        <input
          required
          type="file"
          className="file-input file-input-bordered w-full max-w-xs"
          name="image"
        />
        {/* <DragAndDrop /> */}
        <input
          required
          name="price"
          type="number"
          placeholder="Price"
          className="input input-bordered w-full"
        />

        <AddDiscount />

        <FormSubmitBtn className="btn-block rounded-none text-white">
          Add Product
        </FormSubmitBtn>
      </form>
    </div>
  );
}
