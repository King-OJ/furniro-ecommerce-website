"use server";
import { cookies } from "next/headers";
import { prisma } from "./prisma";
import { Cart, Prisma } from "@prisma/client";

export type CartWithProducts = Prisma.CartGetPayload<{
  include: {
    items: {
      include: {
        product: true;
      };
    };
  };
}>;

export type ShoppingCart = CartWithProducts & {
  totalItems: number;
  subTotal: number;
};

export async function getCart(): Promise<ShoppingCart | null> {
  //decrypt cookie value
  const localCartId = cookies().get("localCartId")?.value;
  const cart = localCartId
    ? await prisma.cart.findUnique({
        where: {
          id: localCartId,
        },
        include: {
          items: {
            include: {
              product: true,
            },
          },
        },
      })
    : null;
  if (!cart) return null;

  return {
    ...cart,
    totalItems: cart.items.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0),
    subTotal: cart.items.reduce((acc, item) => {
      return acc + item.quantity * item.product.price;
    }, 0),
  };
}

export async function createCart(): Promise<ShoppingCart> {
  const newCart = await prisma.cart.create({
    data: {},
  });
  //will be encrypted later
  cookies().set("localCartId", newCart.id);

  return {
    ...newCart,
    items: [],
    totalItems: 0,
    subTotal: 0,
  };
}
