import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient().$extends({
  result: {
    product: {
      discountedPrice: {
        needs: { price: true, discount: true },
        compute(product) {
          return product.price - (product.discount / 100) * product.price;
        },
      },
    },
  },
});

export default prisma;
