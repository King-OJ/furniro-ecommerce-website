import { revalidatePath } from "next/cache";
import cloudinary from "./cloudinary";
import { createCart, getCart } from "./db/cart";
import prisma from "./db/prisma";

export const relatedProducts = [
  {
    id: "12345",
    description: "Hello this is the best product",
    name: "syltherine",
    title: "stylish cafe chair",
    price: 2500,
    imageUrl: "/product1.png",
    discount: 30,
    discountedPrice: 0,
    updatedAt: new Date(Date.now()),
    createdAt: new Date(Date.now()),
  },
  {
    id: "12345",
    description: "Hello this is the best product",
    name: "leviosa",
    title: "stylish cafe chair",
    price: 2500,
    imageUrl: "/product2.png",
    discount: null,
    discountedPrice: 0,
    updatedAt: new Date(Date.now()),
    createdAt: new Date(Date.now()),
  },
  {
    id: "12345",
    description: "Hello this is the best product",
    name: "lolito",
    title: "luxury big sofa",
    price: 7000,
    imageUrl: "/product3.png",
    discount: 50,
    discountedPrice: 0,
    updatedAt: new Date(Date.now()),
    createdAt: new Date(Date.now()),
  },
  {
    id: "12345",
    description: "Hello this is the best product",
    name: "respira",
    title: "outdoor bar table and stool",
    price: 50000,
    imageUrl: "/product4.png",
    discount: null,
    discountedPrice: 0,
    updatedAt: new Date(Date.now()),
    createdAt: new Date(Date.now()),
  },
];

export async function getHomeProducts() {
  return prisma.product.findMany({
    take: 8,
    orderBy: { id: "desc" },
  });
}

export async function getProducts() {
  return prisma.product.findMany({
    orderBy: { id: "desc" },
  });
}

export async function getSingleProduct(id: string) {
  return prisma.product.findUnique({
    where: { id: id },
  });
}

export async function addProduct(formData: FormData) {
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

  // redirect("/");
}

export async function removeFromCart(productId: string, path: string) {
  "use server";
  // console.log(path);

  const cart = (await getCart()) ?? (await createCart());

  const itemIsAlreadyInCart = cart.items.find(
    (item) => item.productId === productId,
  );

  if (cart && itemIsAlreadyInCart) {
    console.log("item is in cart");

    await prisma.cartItem.delete({
      where: {
        id: itemIsAlreadyInCart.id,
      },
    });
  }

  revalidatePath(path);
}
