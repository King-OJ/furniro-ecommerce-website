import { relatedProducts } from "@/actions";
import SingleProduct from "@/components/SingleProduct";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";

export default function page() {

const price = "250,000.00"

  return (
    <>
        <section className="bg-cream">
            <div className="px-10 py-6">
                <div className="flex items-center space-x-4 h-full">
                    <div className="text-lightAsh flex items-center justify-between text-xs ">
                    <Link href='/'>Home</Link>
                      <span className="text-lightGrey"><FaChevronRight className=" ml-2" /></span>
                    </div>
                    <div className="text-lightAsh flex items-center justify-between text-xs ">
                      <Link href='/shop'>Shop</Link>
                      <span className="text-lightGrey"><FaChevronRight className="ml-2" /></span>
                    </div>
                    <div className="h-6 w-[1px] bg-lightGrey"></div>
                    <p className="text-black font-semibold capitalize text-xs">asgaard sofa</p>
                </div>
            </div>
        </section>

        <section>
            <div className="p-10">
                <div className="grid grid-flow-cols md:grid-cols-2 gap-6 md:gap-10">
                    
                    <div className="flex">
                        <ul className="mr-4 space-y-4">
                            <li className="bg-cream w-16 h-14 p-[2px] grid place-content-center rounded-md cursor-pointer">
                                <Image 
                                src='/Outdoor-sofa-set-2.png'
                                alt="furniture img"
                                height={60}
                                width={60}
                                className="h-full w-full aspect-auto"
                                />
                            </li>
                            <li className="bg-cream w-16 h-14 p-[2px] grid place-content-center rounded-md cursor-pointer">
                                <Image 
                                src='/Maya-sofa-three-seater1.png'
                                alt="furniture img"
                                height={60}
                                width={60}
                                className="h-full w-full aspect-auto"
                                />
                            </li>
                            <li className="bg-cream w-16 h-14 p-[2px] grid place-content-center rounded-md cursor-pointer">
                                <Image 
                                src='/Stuart-sofa-1.png'
                                alt="furniture img"
                                height={60}
                                width={60}
                                className="h-full w-full"
                                />
                            </li>
                            <li className="bg-cream w-16 h-14 p-[2px] grid place-content-center rounded-md cursor-pointer">
                                <Image 
                                src='/Mask-group.png'
                                alt="furniture img"
                                height={60}
                                width={60}
                                className="h-full w-full"
                                />
                            </li>
                            
                        </ul>
                        <div className="rounded-md bg-cream h-80 flex-1 grid place-content-center">
                        <Image 
                                src='/Asgaard sofa 3.png'
                                alt="furniture img"
                                height={300}
                                width={300}
                                className="h-full w-full aspect-auto"
                                />
                        </div>
                    </div>

                    <div>
                        <h6 className="text-black text-xl md:text-2xl mb-[2px] capitalize">asgaard sofa</h6>
                        <p className="text-thickAsh text-base md:text-lg mb-1">{`USD ${price}`}</p>
                        <div className="flex text-lightAsh">
                            <ul className="flex">
                                <li><MdOutlineStar fill="#FFC700" /></li>
                                <li><MdOutlineStar fill="#FFC700" /></li>
                                <li><MdOutlineStar fill="#FFC700" /></li>
                                <li><MdOutlineStar fill="#FFC700" /></li>
                                <li><MdOutlineStar fill="#FFC700" /></li>
                            </ul>
                            <div className="divider mx-2 divider-horizontal"></div>
                            <p className="text-xs">5 Customer Review</p>
                        </div>
                        <p className="my-3 text-xs leading-6 lg:text-sm">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
                        <div className="space-y-1">
                            <p className="text-lightAsh text-xs">Size</p>
                            <ul className="flex items-center space-x-2">
                                <li><button className="btn min-h-[20px] p-[3px] text-xs px-3 h-7 bg-primaryColor text-white font-normal">X</button></li>
                                <li><button className="btn min-h-[20px] p-[3px] text-xs px-3 h-7 bg-cream text-black font-normal">XL</button></li>
                                <li><button className="btn min-h-[20px] p-[3px] text-xs px-3 h-7 bg-cream text-black font-normal">XS</button></li>
                            </ul>
                        </div>
                        <div className="space-y-1 my-2">
                            <p className="text-lightAsh text-xs">Color</p>
                            <ul className="flex items-center space-x-2">
                                <li><button className="inline-block w-5 h-5  bg-purple rounded-full"></button></li>
                                <li><button className="inline-block w-5 h-5  bg-black rounded-full"></button></li>
                                <li><button className="inline-block w-5 h-5  bg-primaryColor rounded-full"></button></li>
                            </ul>
                        </div>
                        <ul className="flex space-x-2 text-xs mt-4  text-black">
                            <li>
                                <button className="border rounded-md border-lightAsh p-2 space-x-6">
                                    <span className="text-lightAsh">-</span>
                                    <span>1</span>
                                    <span>+</span>
                                </button>
                            </li>
                            <li>
                                <button className="border rounded-md border-black px-3 md:px-6 py-2 ">
                                    Add To Cart
                                </button>
                            </li>
                            <li>
                                <button className="border rounded-md border-black px-3 md:px-6 py-2 space-x-1">
                                    <span>+</span>
                                    <span>Compare</span>
                                </button>
                            </li>
                        </ul>

                        <div className="divider divider-vertical mt-8 mb-4"></div>

                        <ul className="text-lightAsh text-xs lg:text-sm flex-col space-y-3">
                            <li>
                                <span className="inline-block min-w-[80px]">SKU</span>
                                <span>
                                    <span className="mr-1">:</span>
                                    SS001
                                </span>
                            </li>
                            <li>
                                <span className="inline-block min-w-[80px]">Category</span>
                                <span>
                                    <span className="mr-1">:</span> 
                                    Sofas
                                </span>
                            </li>
                            <li>
                                <span className="inline-block min-w-[80px]">Tags</span>
                                <span>
                                    <span className="mr-1">:</span>
                                    Sofa, Chair, Home, Shop
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="min-w-[80px]">Share</span>
                                <span className="flex items-center" >
                                    <span className="inline-block mr-1">:</span>
                                    <div className="inline-block">
                                        <ul className="flex items-center space-x-3 text-lg ">
                                            <li className=""><FaFacebook fill="#000" /> </li>
                                            <li><FaLinkedin fill="#000" /> </li>
                                            <li><FaTwitter fill="#000" /> </li>
                                        </ul>
                                    </div>
                                     
                                    
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="border-t-2 border-b-2 border-ashColor">
            <div className="p-10 space-y-8">
                <div className="max-w-3xl mx-auto text-lightAsh space-y-4">
                    <ul className="flex justify-center space-x-4 md:space-x-8 text-sm  items-center">
                        <li className="text-black"><button>Description</button></li>
                        <li className=""><button>Additional Information</button></li>
                        <li className=""><button>Reviews [5]</button></li>
                    </ul>
                    <p className="text-xs leading-5 md:text-sm ">
                    Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                    </p>
                    
                    <p className="text-xs leading-5 md:text-sm"> Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                    </p>
                </div>

                <div className="grid grid-flow-col md:grid-cols-2 gap-2 md:gap-6">
                    <div className="bg-cream w-full h-28 md:h-60 grid place-content-center rounded-md">
                        <Image 
                        alt="furniro"
                            src='/Cloud_sofa_three_seater_ottoman_1_1.png'
                            height={0}
                            width={0}
                            sizes="100vw"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="bg-cream w-full h-28 md:h-60 grid place-content-center rounded-md">
                        <Image 
                        alt="furniro"
                            src='/Cloud_sofa_three_seater_ottoman_2_1.png'
                            height={0}
                            width={0}
                            sizes="100vw"
                            className="w-full h-auto"
                        />
                    </div>
                </div>

            </div>
        </section>

        <section>
           <div className="p-10">
                <h5 className="text-center">Related Products</h5>
                <ul className="my-8 grid md:grid-flow-col md:grid-cols-4 gap-6">
                    {
                        relatedProducts.map((product, i)=> {
                            return <SingleProduct key={i} product={product} />
                        })
                    }
                </ul>
                 {/* show more button */}
                <div className="flex justify-center">
                    <Link href='/shop' className="btn btn-primary btn-outline min-h-10 h-10 md:h-12 text-xs md:text-sm  rounded-none px-16 capitalize">show more</Link>
                </div>
           </div>
        </section>
    </>
  )
}
