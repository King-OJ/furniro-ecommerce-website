import { relatedProducts } from "@/utils/actions";
import SingleProduct from "@/components/SingleProduct";
import Image from "next/image";
import Link from "next/link";
import {
  FaChevronRight,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";

export default function page() {
  const price = "250,000.00";

  return (
    <>
      <section className="bg-cream">
        <div className="px-10 py-6">
          <div className="flex h-full items-center space-x-4">
            <div className="flex items-center justify-between text-xs text-lightAsh ">
              <Link href="/">Home</Link>
              <span className="text-lightGrey">
                <FaChevronRight className=" ml-2" />
              </span>
            </div>
            <div className="flex items-center justify-between text-xs text-lightAsh ">
              <Link href="/shop">Shop</Link>
              <span className="text-lightGrey">
                <FaChevronRight className="ml-2" />
              </span>
            </div>
            <div className="h-6 w-[1px] bg-lightGrey"></div>
            <p className="text-xs font-semibold capitalize text-black">
              asgaard sofa
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="p-10">
          <div className="grid-flow-cols grid gap-6 md:grid-cols-2 md:gap-10">
            <div className="flex">
              <ul className="mr-4 space-y-4">
                <li className="grid h-14 w-16 cursor-pointer place-content-center rounded-md bg-cream p-[2px]">
                  <Image
                    src="/Outdoor-sofa-set-2.png"
                    alt="furniture img"
                    height={60}
                    width={60}
                    className="aspect-auto h-full w-full"
                  />
                </li>
                <li className="grid h-14 w-16 cursor-pointer place-content-center rounded-md bg-cream p-[2px]">
                  <Image
                    src="/Maya-sofa-three-seater1.png"
                    alt="furniture img"
                    height={60}
                    width={60}
                    className="aspect-auto h-full w-full"
                  />
                </li>
                <li className="grid h-14 w-16 cursor-pointer place-content-center rounded-md bg-cream p-[2px]">
                  <Image
                    src="/Stuart-sofa-1.png"
                    alt="furniture img"
                    height={60}
                    width={60}
                    className="h-full w-full"
                  />
                </li>
                <li className="grid h-14 w-16 cursor-pointer place-content-center rounded-md bg-cream p-[2px]">
                  <Image
                    src="/Mask-group.png"
                    alt="furniture img"
                    height={60}
                    width={60}
                    className="h-full w-full"
                  />
                </li>
              </ul>
              <div className="grid h-80 flex-1 place-content-center rounded-md bg-cream">
                <Image
                  src="/Asgaard sofa 3.png"
                  alt="furniture img"
                  height={300}
                  width={300}
                  className="aspect-auto h-full w-full"
                />
              </div>
            </div>

            <div>
              <h6 className="mb-[2px] text-xl capitalize text-black md:text-2xl">
                asgaard sofa
              </h6>
              <p className="mb-1 text-base text-thickAsh md:text-lg">{`USD ${price}`}</p>
              <div className="flex text-lightAsh">
                <ul className="flex">
                  <li>
                    <MdOutlineStar fill="#FFC700" />
                  </li>
                  <li>
                    <MdOutlineStar fill="#FFC700" />
                  </li>
                  <li>
                    <MdOutlineStar fill="#FFC700" />
                  </li>
                  <li>
                    <MdOutlineStar fill="#FFC700" />
                  </li>
                  <li>
                    <MdOutlineStar fill="#FFC700" />
                  </li>
                </ul>
                <div className="divider divider-horizontal mx-2"></div>
                <p className="text-xs">5 Customer Review</p>
              </div>
              <p className="my-3 text-xs leading-6 lg:text-sm">
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>
              <div className="space-y-1">
                <p className="text-xs text-lightAsh">Size</p>
                <ul className="flex items-center space-x-2">
                  <li>
                    <button className="btn h-7 min-h-[20px] bg-primaryColor p-[3px] px-3 text-xs font-normal text-white">
                      X
                    </button>
                  </li>
                  <li>
                    <button className="btn h-7 min-h-[20px] bg-cream p-[3px] px-3 text-xs font-normal text-black">
                      XL
                    </button>
                  </li>
                  <li>
                    <button className="btn h-7 min-h-[20px] bg-cream p-[3px] px-3 text-xs font-normal text-black">
                      XS
                    </button>
                  </li>
                </ul>
              </div>
              <div className="my-2 space-y-1">
                <p className="text-xs text-lightAsh">Color</p>
                <ul className="flex items-center space-x-2">
                  <li>
                    <button className="inline-block h-5 w-5  rounded-full bg-purple"></button>
                  </li>
                  <li>
                    <button className="inline-block h-5 w-5  rounded-full bg-black"></button>
                  </li>
                  <li>
                    <button className="inline-block h-5 w-5  rounded-full bg-primaryColor"></button>
                  </li>
                </ul>
              </div>
              <ul className="mt-4 flex space-x-2 text-xs  text-black">
                <li>
                  <button className="space-x-6 rounded-md border border-lightAsh p-2">
                    <span className="text-lightAsh">-</span>
                    <span>1</span>
                    <span>+</span>
                  </button>
                </li>
                <li>
                  <button className="rounded-md border border-black px-3 py-2 md:px-6 ">
                    Add To Cart
                  </button>
                </li>
                <li>
                  <button className="space-x-1 rounded-md border border-black px-3 py-2 md:px-6">
                    <span>+</span>
                    <span>Compare</span>
                  </button>
                </li>
              </ul>

              <div className="divider divider-vertical mb-4 mt-8"></div>

              <ul className="flex-col space-y-3 text-xs text-lightAsh lg:text-sm">
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
                  <span className="flex items-center">
                    <span className="mr-1 inline-block">:</span>
                    <div className="inline-block">
                      <ul className="flex items-center space-x-3 text-lg ">
                        <li className="">
                          <FaFacebook fill="#000" />{" "}
                        </li>
                        <li>
                          <FaLinkedin fill="#000" />{" "}
                        </li>
                        <li>
                          <FaTwitter fill="#000" />{" "}
                        </li>
                      </ul>
                    </div>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-t-2 border-ashColor">
        <div className="space-y-8 p-10">
          <div className="mx-auto max-w-3xl space-y-4 text-lightAsh">
            <ul className="flex items-center justify-center space-x-4 text-sm  md:space-x-8">
              <li className="text-black">
                <button>Description</button>
              </li>
              <li className="">
                <button>Additional Information</button>
              </li>
              <li className="">
                <button>Reviews [5]</button>
              </li>
            </ul>
            <p className="text-xs leading-5 md:text-sm ">
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>

            <p className="text-xs leading-5 md:text-sm">
              {" "}
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>

          <div className="grid grid-flow-col gap-2 md:grid-cols-2 md:gap-6">
            <div className="grid h-28 w-full place-content-center rounded-md bg-cream md:h-60">
              <Image
                alt="furniro"
                src="/Cloud_sofa_three_seater_ottoman_1_1.png"
                height={0}
                width={0}
                sizes="100vw"
                className="h-auto w-full"
              />
            </div>
            <div className="grid h-28 w-full place-content-center rounded-md bg-cream md:h-60">
              <Image
                alt="furniro"
                src="/Cloud_sofa_three_seater_ottoman_2_1.png"
                height={0}
                width={0}
                sizes="100vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="p-10">
          <h5 className="text-center">Related Products</h5>
          <ul className="my-8 grid gap-6 md:grid-flow-col md:grid-cols-4">
            {relatedProducts.map((product, i) => {
              return <SingleProduct key={i} product={product} />;
            })}
          </ul>
          {/* show more button */}
          <div className="flex justify-center">
            <Link
              href="/shop"
              className="btn btn-outline btn-primary h-10 min-h-10 rounded-none px-16 text-xs  capitalize md:h-12 md:text-sm"
            >
              show more
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
