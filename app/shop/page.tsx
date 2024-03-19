import Image from "next/image";
import { GiSettingsKnobs } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa";
import { BsFillGridFill, BsPatchCheck } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSplitscreen, MdSupportAgent } from "react-icons/md";
import { HiOutlineTrophy } from "react-icons/hi2";
import { getProducts } from "@/utils/actions";
import SingleProduct from "@/components/SingleProduct";
import Link from "next/link";

const page = async () => {
  const allProducts = await getProducts();

  return (
    <>
      <section id="shopHeader" className="">
        <div className="min-h-[10vh] overflow-hidden md:min-h-[20vh]">
          <div className="relative w-full">
            <Image
              src="/shopHeaderImg.png"
              width={1000}
              height={1000}
              alt="furniro logo"
              className="aspect-auto h-full w-full"
              priority
            />
            <div className="absolute inset-0 bg-white bg-opacity-5">
              <div className="grid h-full place-content-center">
                <div className="flex flex-col items-center">
                  <h3 className="text-2xl font-semibold tracking-widest md:text-4xl">
                    Shop
                  </h3>

                  <div className="mt-2 flex items-center text-xs md:text-sm">
                    <Link href="/" className="font-semibold">
                      Home
                    </Link>
                    <span className="mx-2">
                      <FaChevronRight className="font-extrabold " />
                    </span>
                    <p className="">Shop</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="-mt-1 bg-cream px-6 py-4 md:px-10 md:py-6">
          <div className="flex flex-col space-y-4 text-xs md:flex-row md:items-center md:justify-between md:space-y-0 md:text-sm">
            <div className="flex items-center space-x-2 text-sm text-black">
              <ul className="flex items-center space-x-6">
                <li className="flex items-center">
                  <GiSettingsKnobs className="mr-2 rotate-90" /> Filter
                </li>
                <li className="">
                  <BsFillGridFill />
                </li>
                <li className="">
                  <MdSplitscreen />
                </li>
              </ul>
              <div className="divider divider-horizontal"></div>
              <p className="text-xs">Showing 1 - 16 of 32 results </p>
            </div>
            <div className="flex space-x-6">
              <div className="flex items-center space-x-2">
                <span>Show</span>
                <input
                  type="text"
                  defaultValue={16}
                  className="grid h-6 w-8 place-content-center bg-white p-2 text-lightAsh outline-none md:h-8 md:w-8"
                />
              </div>
              <div className="flex items-center space-x-2">
                <span>Sort by</span>
                <select
                  name="sort"
                  id="sort"
                  className="max-h-6 appearance-none bg-white px-4 py-1 text-lightAsh outline-none md:max-h-8 md:py-2"
                >
                  <option value="default">Default</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products">
        <div className="px-4 py-10 md:px-10 md:py-16">
          <ul className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-6">
            {allProducts.map((product, i) => {
              return <SingleProduct key={i} product={product} />;
            })}
          </ul>
          <div className="mt-10 flex justify-center">
            <ul className="flex items-center space-x-4">
              <li>
                <button className="btn bg-primaryColor font-normal text-white">
                  1
                </button>
              </li>
              <li>
                <button className="btn bg-cream font-normal text-black">
                  2
                </button>
              </li>
              <li>
                <button className="btn bg-cream font-normal text-black">
                  3
                </button>
              </li>
              <li>
                <button className="btn bg-cream font-normal text-black">
                  Next
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="px-6 py-10 md:py-12">
          <ul className="grid grid-cols-2 gap-4 text-xs text-black md:grid-cols-4 md:text-sm">
            <li className="flex items-center space-x-2">
              <HiOutlineTrophy size={40} />
              <div className="space-y-1">
                <h6 className="font-semibold text-black">High Quality</h6>
                <p className="text-xs text-thickAsh">
                  Crafted from top materials
                </p>
              </div>
            </li>
            <li className="flex items-center space-x-2">
              <BsPatchCheck size={40} />
              <div className="space-y-1">
                <h6 className="font-semibold text-black">
                  Warranty Protection
                </h6>
                <p className="text-xs text-thickAsh">Over 2 years</p>
              </div>
            </li>
            <li className="flex items-center space-x-2">
              <TbTruckDelivery size={40} />
              <div className="space-y-1">
                <h6 className="font-semibold text-black">Free Shipping</h6>
                <p className="text-xs text-thickAsh">Order over $150</p>
              </div>
            </li>
            <li className="flex items-center space-x-2">
              <MdSupportAgent size={40} />
              <div className="space-y-1">
                <h6 className="font-semibold text-black">24/7 Support</h6>
                <p className="text-xs text-thickAsh">Dedicated support</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default page;
