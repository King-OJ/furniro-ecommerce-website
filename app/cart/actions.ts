"use server";

import { createCart, getCart } from "@/utils/db/cart";
import prisma from "@/utils/db/prisma";
import { revalidatePath } from "next/cache";

export async function setProductQuantity(productId: string, quantity: number) {
  const cart = (await getCart()) ?? (await createCart());

  const itemIsAlreadyInCart = cart.items.find(
    (item) => item.productId === productId,
  );

  if (quantity === 0) {
    if (itemIsAlreadyInCart) {
      await prisma.cartItem.delete({
        where: {
          id: itemIsAlreadyInCart.id,
        },
      });
    }
  } else {
    if (itemIsAlreadyInCart) {
      await prisma.cartItem.update({
        where: {
          id: itemIsAlreadyInCart.id,
        },
        data: { quantity },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId,
          quantity,
        },
      });
    }
  }

  revalidatePath("/cart");
}
