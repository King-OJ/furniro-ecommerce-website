import FeaturesSection from "@/components/FeaturesSection";
import FormRow from "@/components/FormRow";
import FormSubmitBtn from "@/components/FormSubmitBtn";
import SectionHeader from "@/components/SectionHeader";
import { getCart } from "@/utils/db/cart";
import { formatPrice } from "@/utils/formatPrice";

export default async function page() {
  const cart = await getCart();

  return (
    <section>
      <SectionHeader>Checkout</SectionHeader>
      <div className="m-6 min-h-[25vh] md:m-10">
        <form
          action={async () => {
            "use server";
            console.log("form submited");
          }}
          className="grid gap-6 sm:grid-flow-col md:gap-10"
        >
          <div className="w-full ">
            <h5 className="mb-8">billing details</h5>
            <div className="grid w-full grid-flow-col items-center gap-2">
              <FormRow
                title="first name"
                name="firstName"
                type="text"
                required
              />
              <FormRow title="last name" name="lastName" type="text" required />
            </div>
            <FormRow
              title="company name (optional)"
              name="companyName"
              type="text"
            />
            <FormRow
              title="country / region"
              name="country"
              type="text"
              required
            />
            <FormRow
              title="street address"
              name="street"
              type="text"
              required
            />
            <FormRow title="town / city" name="city" type="text" required />
            <FormRow
              title="company name (optional)"
              name="companyName"
              type="text"
            />
            <FormRow title="province" name="companyName" type="text" />
            <FormRow title="ZIP code" name="zip" type="number" />
            <FormRow title="phone" name="phone" type="phone" required />
            <FormRow title="email" name="email" type="email" required />
            <FormRow
              title=""
              name="email"
              type="email"
              placeholder="Any additional information"
            />
          </div>

          <div className="divide-y-[1px]">
            <ul className="mb-4 space-y-4">
              <li className="flex items-center justify-between">
                <h6 className="font-semibold">Product</h6>
                <h6 className="font-semibold">Subtotal</h6>
              </li>
              <ul className="space-y-3">
                {cart.items.length &&
                  cart.items.map((item) => {
                    return (
                      <li
                        key={item.id}
                        className="flex items-center justify-between text-sm"
                      >
                        <div>
                          <h6 className=" inline-block text-lightAsh ">
                            {item.product.name}
                          </h6>
                          <span className="mx-2 text-xs font-semibold">
                            {" "}
                            X{" "}
                          </span>
                          <span className="text-xs font-bold">
                            {item.quantity}
                          </span>
                        </div>
                        <h6 className="text-lightGrey">
                          {formatPrice(item.product.price * item.quantity)}
                        </h6>
                      </li>
                    );
                  })}
              </ul>

              <li className="flex items-center justify-between text-sm text-lightGrey">
                <h6 className="font-semibold">Subtotal</h6>
                <h6 className="text-lightGrey">{formatPrice(cart.subTotal)}</h6>
              </li>
              <li className="flex items-center justify-between text-sm text-lightGrey">
                <h6 className="font-semibold ">Total</h6>
                <h6 className="text-base font-bold text-primaryColor">
                  {formatPrice(cart.subTotal)}
                </h6>
              </li>
            </ul>
            <div className="border-lightGrey py-4">
              <p className="text-xs leading-5 text-lightGrey">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>

              <ul className="my-6 space-y-2 text-lightGrey">
                <li className="flex items-center text-sm">
                  <input
                    checked
                    type="checkbox"
                    className="checkbox-secondary checkbox checkbox-sm mr-4 border-primaryColor hover:border-primaryColor"
                  />
                  Direct Bank Transfer
                </li>
                <li className="flex items-center text-sm">
                  <input
                    type="checkbox"
                    className="checkbox-secondary checkbox checkbox-sm mr-4 border-primaryColor hover:border-primaryColor"
                  />
                  Cash on delivery
                </li>
              </ul>

              <p className="mb-4 text-xs leading-5">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </p>
              <div className="flex justify-center">
                <FormSubmitBtn className="btn-outline ">
                  Place order
                </FormSubmitBtn>
              </div>
            </div>
          </div>
        </form>
      </div>
      <FeaturesSection />
    </section>
  );
}
