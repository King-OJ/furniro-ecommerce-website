import SingleProduct from "@/components/SingleProduct";
import Image from "next/image";
import { BsArrowRight, BsDash } from "react-icons/bs";
import { getProducts } from "@/utils/actions";
import Link from "next/link";

export default async function Home() {
  const products = await getProducts();
  // console.log(products);

  return (
    <>
      <section
        className="hero min-h-[70vh]"
        style={{
          backgroundImage: "url(/furniro-hero.png)",
          backgroundRepeat: "no",
        }}
      >
        <div className="hero-overlay bg-base-100 bg-opacity-20"></div>
        <div className="hero-content w-full pr-6">
          <div className="ml-auto max-w-md bg-lightCream px-6 py-10">
            <p className="mb-1 tracking-wider">New Arrival</p>
            <h1 className="mb-5 text-left text-4xl font-bold text-primaryColor">
              Discover Our New Collection
            </h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quaerat ad aperiam, necessitatibus consequuntur iure
              dolores aut quae doloribus repellendus!
            </p>
            <button className="btn rounded-none bg-primaryColor px-6 text-white hover:bg-primaryColor hover:bg-opacity-80">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section id="range">
        <div className="px-16 py-16">
          {/* section header */}
          <div className="mb-10 space-y-2 text-center">
            <h2 className="text-2xl font-bold capitalize">browse the range</h2>
            <p className="text-base text-lightGrey">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          {/* section content */}
          <div className="grid h-full grid-flow-col grid-cols-3 gap-6">
            <div className="h-full text-center">
              <Image
                src="/range1.png"
                width={300}
                height={300}
                alt="furniro logo"
                className="h-auto w-auto"
              />
              <h6 className="mt-2 font-bold">Dining</h6>
            </div>
            <div className="h-full text-center">
              <Image
                src="/range2.png"
                width={300}
                height={300}
                alt="furniro logo"
                className="h-auto w-auto"
              />
              <h6 className="mt-2 font-bold">Living</h6>
            </div>
            <div className="h-full text-center">
              <Image
                src="/range3.png"
                width={300}
                height={300}
                alt="furniro logo"
                className="h-auto w-auto"
              />
              <h6 className="mt-2 font-bold">Bedroom</h6>
            </div>
          </div>
        </div>
      </section>

      <section id="products">
        <div className="px-10 py-10 xl:px-0">
          {/* section header */}
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold capitalize">our products</h2>
          </div>

          {/* section content */}
          <ul className="grid gap-6 md:grid-cols-4">
            {products.map((product, i) => {
              return <SingleProduct key={i} product={product} />;
            })}
          </ul>

          {/* show more button */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/shop"
              className="btn btn-outline btn-primary h-10 min-h-10 rounded-none px-16 text-xs capitalize md:h-12 md:text-sm"
            >
              show more
            </Link>
          </div>
        </div>
      </section>

      <section id="beautiful" className="bg-lighterCream">
        <div className="flex items-center py-16 pl-10">
          <div className="space-y-6">
            <h2 className="mr-auto max-w-xs text-3xl font-bold">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="mr-auto max-w-xs text-sm text-lightGrey">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              est rerum, neque consequatur esse sit.
            </p>
            <button className="btn rounded-none bg-primaryColor px-8 font-semibold text-white">
              Explore More
            </button>
          </div>

          <div className="flex flex-1 space-x-4">
            <div className="relative h-full">
              <Image
                src="/innerpeace.png"
                width={200}
                height={200}
                alt="furniro logo"
                className="aspect-auto h-[550px] w-auto"
              />
              <div className="absolute bottom-4 left-4 flex items-end">
                <div className="grid place-content-center bg-white bg-opacity-60 px-4  py-6 ">
                  <div className="flex items-center  space-x-1 text-xs text-lightGrey">
                    <span>01</span>
                    <span>
                      <BsDash />
                    </span>
                    <span>Bed Room</span>
                  </div>
                  <h6 className="text-base font-semibold">Inner Peace</h6>
                </div>
                <button className="bg-primaryColor p-2 text-white">
                  <BsArrowRight />
                </button>
              </div>
            </div>

            <div>
              <div className="carousel carousel-center max-w-lg space-x-4 bg-lighterCream">
                <div
                  id="item1"
                  className="carousel-item max-h-[460px] max-w-sm"
                >
                  <Image
                    src="/sliderImg.png"
                    width={300}
                    height={300}
                    alt="furniro logo"
                    className="aspect-auto h-full w-full"
                  />
                </div>
                <div
                  id="item2"
                  className="carousel-item max-h-[460px] max-w-sm"
                >
                  <Image
                    src="/sliderImg.png"
                    width={300}
                    height={300}
                    alt="furniro logo"
                    className="aspect-auto h-full w-full"
                  />
                </div>
                <div
                  id="item3"
                  className="carousel-item max-h-[460px] max-w-sm"
                >
                  <Image
                    src="/sliderImg.png"
                    width={300}
                    height={300}
                    alt="furniro logo"
                    className="aspect-auto h-full w-full"
                  />
                </div>
              </div>
              <div className="flex w-full gap-2 py-2">
                <div className="cursor-pointer rounded-full border border-primaryColor p-1">
                  <a
                    href="#item1"
                    className="block rounded-full bg-primaryColor p-[3px] "
                  ></a>
                </div>
                <div className="cursor-pointer rounded-full border-0 border-primaryColor p-1 hover:border">
                  <a
                    href="#item2"
                    className="block rounded-full bg-lightAsh p-[3px] "
                  ></a>
                </div>
                <div className="cursor-pointer rounded-full border-0 border-primaryColor p-1 hover:border">
                  <a
                    href="#item3"
                    className="block rounded-full bg-lightAsh p-[3px] "
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="shareSetup">
        <div className="px-10 py-16 md:px-0">
          {/* section header */}
          <div className="mb-5 text-center">
            <p className="mb-2 text-sm font-semibold text-thickAsh">
              Share your setup with
            </p>
            <h2 className="text-2xl font-bold capitalize">#FuniroFurniture</h2>
          </div>

          {/* section content */}
          <div className="grid max-h-[900px] grid-flow-col grid-cols-11 grid-rows-9 gap-4">
            <figure className="col-start-1 row-span-5">
              <Image
                src="/r1c1GridImg.png"
                width={300}
                height={300}
                alt="furniro logo"
                className="h-full w-full object-cover"
              />
            </figure>
            <figure className="col-span-2 row-span-4 row-start-6">
              <Image
                src="/r2c1GridImg.png"
                width={300}
                height={300}
                alt="furniro logo"
                className="h-full w-full object-cover"
              />
            </figure>
            <figure className="col-span-3 col-start-2 row-span-4 row-start-2">
              <Image
                src="/r1c2GridImg.png"
                width={300}
                height={300}
                alt="furniro logo"
                className="h-full w-full object-cover"
              />
            </figure>
            <figure className="col-span-2 col-start-3 row-span-3 row-start-6">
              <Image
                src="/r2c2GridImg.png"
                width={300}
                height={300}
                alt="furniro logo"
                className="h-full w-full object-cover"
              />
            </figure>

            <figure className="col-span-2 col-start-5 row-span-4 row-start-3">
              <Image
                src="/centerGridImg.png"
                width={300}
                height={300}
                alt="furniro logo"
                className="h-full w-full object-cover"
              />
            </figure>

            <figure className="col-span-3 col-start-7 row-span-4 row-start-2">
              <Image
                src="/r1c4GridImg.png"
                width={300}
                height={300}
                alt="furniro logo"
                className="h-full w-full object-cover"
              />
            </figure>

            <figure className="col-span-2 col-start-7 row-span-4 row-start-6">
              <Image
                src="/r2c4GridItem.png"
                width={200}
                height={200}
                alt="furniro logo"
                className="h-full w-full object-cover object-center"
              />
            </figure>

            <figure className="col-span-2 col-start-10 row-span-5 row-start-1">
              <Image
                src="/r1c5GridItem.png"
                width={200}
                height={200}
                alt="furniro logo"
                className="h-full w-full object-cover object-center"
              />
            </figure>

            <figure className="col-span-3 col-start-9 row-span-3 row-start-6">
              <Image
                src="/r2c5GridItem.png"
                width={200}
                height={200}
                alt="furniro logo"
                className="h-full w-full object-cover object-center"
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
