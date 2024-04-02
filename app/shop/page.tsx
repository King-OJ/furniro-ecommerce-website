import { GiSettingsKnobs } from "react-icons/gi";
import { BsFillGridFill } from "react-icons/bs";
import { MdSplitscreen } from "react-icons/md";
import { getProducts } from "@/utils/actions";
import SingleProduct from "@/components/SingleProduct";
import SectionHeader from "@/components/SectionHeader";
import FeaturesSection from "@/components/FeaturesSection";
import { addToCart } from "./[id]/actions";

const page = async () => {
  const allProducts = await getProducts();

  return (
    <>
      <section>
        <SectionHeader>Shop</SectionHeader>
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
              return (
                <SingleProduct
                  addToCart={addToCart}
                  path="/shop"
                  key={i}
                  product={product}
                />
              );
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
      <FeaturesSection />
    </>
  );
};

export default page;
