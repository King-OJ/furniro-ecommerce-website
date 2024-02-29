import Image from "next/image"
import { GiSettingsKnobs } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa";
import { BsFillGridFill, BsPatchCheck } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSplitscreen, MdSupportAgent } from "react-icons/md";
import { HiOutlineTrophy } from "react-icons/hi2";
import { allProducts } from "@/actions";
import SingleProduct from "@/components/SingleProduct";

const page = () => {
    
    return (
      <>
        <section id="shopHeader" className="">
          <div className="min-h-[10vh] md:min-h-[20vh] overflow-hidden">
            <div className="relative w-full">
              <Image
                src='/shopHeaderImg.png'
                width={1000}
                height={1000}
                alt="furniro logo"
                className="w-full h-full aspect-auto"
                priority
              />
              <div className="absolute inset-0 bg-white bg-opacity-5">
                <div className="h-full grid place-content-center">
                  <h3 className="font-semibold tracking-widest text-2xl md:text-4xl">Shop</h3>
                
                    <div className="mt-2 flex items-center justify-between text-xs md:text-sm">
                      <p className="font-semibold">Home</p>
                      <span className=""><FaChevronRight className="font-extrabold " /></span>
                      <p className="">Shop</p>
                    </div>
                
                  
                </div>
              </div>
            </div>
            
          </div>
          <div className="py-6 px-10 bg-cream -mt-1">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-2 text-black text-sm">
                <ul className="flex space-x-6 items-center">
                  <li className="flex items-center"><GiSettingsKnobs className="mr-2 rotate-90" /> Filter</li>
                  <li className=""><BsFillGridFill /></li>
                  <li className=""><MdSplitscreen /></li>
                </ul>
                <div className="divider divider-horizontal"></div>
                <p className="text-xs">Showing 1 - 16 of 32 results </p>
              </div>
              <div className="flex space-x-6">
                <div className="flex items-center space-x-2">
                  <span>Show</span>
                  <input type="text" defaultValue={16} className="outline-none text-lightAsh h-8 w-8 p-2 grid place-content-center bg-white" />
                </div>
                <div className="flex items-center space-x-2">
                  <span>Sort by</span>
                  <select name="sort" id="sort" className="max-h-8 appearance-none outline-none bg-white text-lightAsh px-4 py-2">
                    <option value="default">Default</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products">
          <div className="px-10 py-16">
            <ul className="grid md:grid-cols-4 gap-6">
              {allProducts.map((product, i)=> {
                return (
                  <SingleProduct key={i} product={product} />
                )
              })}
            </ul>
            <div className="mt-10 flex justify-center">
              <ul className="flex items-center space-x-4">
                <li><button className="btn bg-primaryColor text-white font-normal">1</button></li>
                <li><button className="btn bg-cream text-black font-normal">2</button></li>
                <li><button className="btn bg-cream text-black font-normal">3</button></li>
                <li><button className="btn bg-cream text-black font-normal">Next</button></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-cream">
          <div className="py-10 md:py-12 px-6">
            <ul className="grid md:grid-cols-4 gap-4 text-black text-sm">
              <li className="flex items-center space-x-2">
                <HiOutlineTrophy size={45}/>
                <div className="space-y-1">
                  <h6 className="text-black font-semibold">High Quality</h6>
                  <p className="text-thickAsh text-xs">Crafted from top materials</p>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <BsPatchCheck size={45}/>
                <div className="space-y-1">
                  <h6 className="text-black font-semibold">Warranty Protection</h6>
                  <p className="text-thickAsh text-xs">Over 2 years</p>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <TbTruckDelivery size={45}/>
                <div className="space-y-1">
                  <h6 className="text-black font-semibold">Free Shipping</h6>
                  <p className="text-thickAsh text-xs">Order over $150</p>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <MdSupportAgent size={45}/>
                <div className="space-y-1">
                  <h6 className="text-black font-semibold">24/7 Support</h6>
                  <p className="text-thickAsh text-xs">Dedicated support</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </>
    )
  }
  
  export default page