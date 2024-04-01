"use server";

import { createCart, getCart } from "@/utils/db/cart";
import prisma from "@/utils/db/prisma";
import { revalidatePath } from "next/cache";

export async function addToCart(productId: string, path: string) {
  const cart = (await getCart()) ?? (await createCart());

  const itemIsAlreadyInCart = cart.items.find(
    (item) => item.productId === productId,
  );

  if (itemIsAlreadyInCart) {
    await prisma.cartItem.update({
      where: {
        id: itemIsAlreadyInCart.id,
      },
      data: {
        quantity: { increment: 1 },
      },
    });
  } else {
    await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId,
        quantity: 1,
      },
    });
  }
  revalidatePath(path, "page");
}
