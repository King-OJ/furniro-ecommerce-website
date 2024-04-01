import FeaturesSection from "@/components/FeaturesSection";
import SectionHeader from "@/components/SectionHeader";
import { getCart } from "@/utils/db/cart";
import { formatPrice } from "@/utils/formatPrice";
import CartItemEntry from "@/components/CartItemEntry";
import { setProductQuantity } from "./actions";
import Link from "next/link";
import { removeFromCart } from "@/utils/actions";

export const metadata = {
  title: "Your Cart - Furniro",
};

export default async function page() {
  const cart = await getCart();
  // console.log(cart);

  return (
    <section>
      <SectionHeader title="Cart" />

      {cart.items.length > 0 ? (
        <div className="m-6 grid grid-flow-col grid-cols-4 gap-4 md:m-10">
          <div className="col-span-3">
            <div className="grid grid-cols-5 gap-2 bg-cream py-1 text-sm">
              <h6 className="col-start-2 font-semibold">Product</h6>
              <h6 className=" font-semibold">Price</h6>
              <h6 className=" font-semibold">Quantity</h6>
              <h6 className=" font-semibold">Subtotal</h6>
            </div>
            <ul className="mt-4 space-y-4">
              {cart?.items.map((item) => {
                return (
                  <CartItemEntry
                    setProductQuantity={setProductQuantity}
                    removeFromCart={removeFromCart}
                    key={item.id}
                    cartItem={item}
                  />
                );
              })}
            </ul>
          </div>
          <div className="grid place-content-center self-start bg-cream px-1 md:px-0">
            <div className="pb-8 pt-3">
              <h5 className="mb-8 text-center">Cart Totals</h5>
              <ul className="mb-6 space-y-4 text-xs font-semibold md:text-sm">
                <li className="flex items-center justify-between">
                  Subtotal
                  <span className="ml-4 font-normal text-thickAsh">
                    {formatPrice(cart?.subTotal)}
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  Total
                  <span className="ml-4 text-primaryColor">
                    {formatPrice(cart?.subTotal)}
                  </span>
                </li>
              </ul>
              <div className="flex justify-center">
                <button className="btn btn-outline h-[2rem] min-h-[2rem]">
                  Check out
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="m-6 flex min-h-[22vh] w-full items-center justify-center space-x-6">
          <h5>Your cart is empty!</h5>
          <Link href="/shop" className="btn btn-primary">
            Fill it
          </Link>
        </div>
      )}

      <FeaturesSection />
    </section>
  );
}
