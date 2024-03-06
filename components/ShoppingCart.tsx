import Image from "next/image";
import { BsCartX } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";

export default function ShoppingCart() {
  return (
    <div className="fixed right-0 top-0 z-20 bg-white">
      <div className="flex min-h-96 min-w-80 flex-col justify-between py-4">
        <div className="px-4">
          <div className="flex items-start justify-between">
            <h5 className="flex-1 border-b border-lightAsh pb-4 font-semibold">
              Shopping Cart
            </h5>
            <button className="pl-6 pt-1 text-lg text-lightAsh">
              <BsCartX />
            </button>
          </div>
          <ul className="mt-4 w-full space-y-3">
            <li className="flex items-center justify-between space-x-1">
              <div className="flex items-center space-x-2">
                <div className="grid h-[50px] w-[50px] place-content-center overflow-hidden rounded-md bg-cream p-1">
                  <Image
                    alt="furniro"
                    src="/Mask group.png"
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-auto w-auto"
                  />
                </div>
                <div className="space-y-2 text-xs">
                  <h6 className="">Asgard sofa</h6>
                  <div className="flex justify-between space-x-1">
                    <p>1</p>
                    <span>X</span>
                    <p className="text-primaryColor">Usd 250,000.00</p>
                  </div>
                </div>
              </div>

              <IoCloseCircle fill="#898989" />
            </li>
            <li className="flex items-center justify-between space-x-1">
              <div className="flex items-center space-x-2">
                <div className="grid h-[50px] w-[50px] place-content-center overflow-hidden rounded-md bg-cream">
                  <Image
                    alt="furniro"
                    src="/Asgaard sofa 5.png"
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-auto w-auto"
                  />
                </div>
                <div className="space-y-2 text-xs">
                  <h6 className="">Casaliving Wood</h6>
                  <div className="flex justify-between space-x-1">
                    <p>1</p>
                    <span>X</span>
                    <p className="text-primaryColor">Usd 250,000.00</p>
                  </div>
                </div>
              </div>

              <IoCloseCircle fill="#898989" />
            </li>
          </ul>
        </div>

        <div>
          <div className="flex items-center space-x-3 px-4 pb-4 text-sm">
            <p className="font-semibold">Subtotal :</p>
            <p className="text-primaryColor">Usd 250,000.00</p>
          </div>

          <ul className="flex items-center justify-between border-t border-lightAsh px-4 pt-3">
            <li>
              <button className="btn btn-outline h-6 rounded-full px-3 text-xs">
                cart
              </button>
            </li>
            <li>
              <button className="btn btn-outline h-6 rounded-full px-3 text-xs">
                checkout
              </button>
            </li>
            <li>
              <button className="btn btn-outline h-6 rounded-full px-3 text-xs">
                comparison
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
