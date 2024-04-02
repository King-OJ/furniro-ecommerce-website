import AddProductForm from "@/components/AddProductForm";
import cloudinary from "@/utils/cloudinary";
import prisma from "@/utils/db/prisma";

export const metadata = {
  title: "Add Product - Furniro",
  description: "Add a product",
};

export default function page() {
  async function addProduct(formData: FormData) {
    "use server";

    const name = formData.get("name")?.toString();
    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();
    const discount = Number(formData.get("discount") || 0);
    const file = formData.get("image") as File;
    const price = Number(formData.get("price") || 0);
    const discountedPrice = price - (discount / 100) * price;

    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    const uploadedImgResource: {
      url?: String;
      signature?: String;
      public_id?: String;
    } = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({}, function (error, result) {
          if (error) {
            reject(error);
            return;
          }

          resolve(result);
        })
        .end(buffer);
    });

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
        discountedPrice,
      },
    });
  }

  return (
    <div className="px-4 py-10 md:px-10">
      <h1 className="mb-4 text-center md:text-2xl">Add Product</h1>
      <AddProductForm addProduct={addProduct} />
    </div>
  );
}
