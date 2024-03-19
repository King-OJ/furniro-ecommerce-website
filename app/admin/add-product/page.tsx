import cloudinary from "@/utils/cloudinary";
import AddDiscount from "@/components/AddDiscount";
import DragAndDrop from "@/components/DragAndDrop";
import FormSubmitBtn from "@/components/FormSubmitBtn";
import prisma from "@/utils/db/prisma";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Add Product - Furniro",
  description: "Add a product",
};

type ImageResource = {
  url?: String;
  signature?: String;
  public_id?: String;
};

async function addProduct(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();
  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();
  const discount = Number(formData.get("discount") || 0);
  const file = formData.get("image") as File;
  const price = Number(formData.get("price") || 0);

  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const uploadedImgResource: ImageResource = await new Promise(
    (resolve, reject) => {
      cloudinary.uploader
        .upload_stream({}, function (error, result) {
          if (error) {
            reject(error);
            return;
          }

          resolve(result);
        })
        .end(buffer);
    },
  );

  if (!name || !description || !price || !title || !uploadedImgResource) {
    throw Error("Missing required fields");
  }
  const { url } = uploadedImgResource;

  await prisma.product.create({
    data: {
      name,
      title,
      description,
      discount,
      imageUrl: url.toString(),
      price,
    },
  });

  // redirect("/");
}

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
