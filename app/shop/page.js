import Image from "next/image"
import { GiSettingsKnobs } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa";

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
          <div className="py-6 px-10 bg-cream">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2 text-black text-sm">
                <ul className="flex space-x-6 items-center">
                  <li className="flex items-center"><GiSettingsKnobs className="mr-2 rotate-90" /> Filter</li>
                </ul>
                <div className="divider divider-horizontal"></div>
                <p className="text-xs">Showing 1 - 16 of 32 results </p>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
  
  export default page