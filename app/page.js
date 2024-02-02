import Image from "next/image"
import { BsShare, BsFilter, BsHeart, BsArrowRight, BsDash} from "react-icons/bs";

export default function Home() {

  const products = [
    {
      title: 'syltherine',
      subtitle: 'stylish cafe chair',
      newPrice: '2500.00',
      oldPrice: '3500.00',
      productImg: '/product1.png',
      discount: 30,
      newProduct: false
    },
    {
      title: 'leviosa',
      subtitle: 'stylish cafe chair',
      newPrice: '2500.00',
      oldPrice: '',
      productImg: '/product2.png',
      discount: null,
      newProduct: false
    },
    {
      title: 'lolito',
      subtitle: 'luxury big sofa',
      newPrice: '7000.00',
      oldPrice: '14000.00',
      productImg: '/product3.png',
      discount: 50,
      newProduct: false
    },
    {
      title: 'respira',
      subtitle: 'outdoor bar table and stool',
      newPrice: '50000.00',
      oldPrice: '',
      productImg: '/product4.png',
      discount: null,
      newProduct: true
    },
    {
      title: 'grifo',
      subtitle: 'night lamp',
      newPrice: '1500.00',
      oldPrice: '',
      productImg: '/product5.png',
      discount: null,
      newProduct: false
    },
    {
      title: 'muggo',
      subtitle: 'small mug',
      newPrice: '2500.00',
      oldPrice: '',
      productImg: '/product6.png',
      discount: null,
      newProduct: true
    },
    {
      title: 'pingky',
      subtitle: 'cute bed set',
      newPrice: '7000.00',
      oldPrice: '14000.00',
      productImg: '/product7.png',
      discount: 50,
      newProduct: false
    },
    {
      title: 'potty',
      subtitle: 'minimalist flower pot',
      newPrice: '5000.00',
      oldPrice: '',
      productImg: '/product8.png',
      discount: null,
      newProduct: true
    },
  ]

  return (
    <>
      <section className="hero min-h-[70vh]" style={{backgroundImage: 'url(/furniro-hero.png)'}}>
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content w-full pr-6">
          <div className="max-w-md ml-auto bg-lightCream py-10 px-6">
            <p className="tracking-wider mb-1">New Arrival</p>
            <h1 className="mb-5 text-left text-4xl font-bold text-primaryColor">Discover Our New Collection</h1>
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quaerat ad aperiam, necessitatibus consequuntur iure dolores aut quae doloribus repellendus!</p>
            <button className="btn hover:bg-opacity-80 hover:bg-primaryColor px-6 rounded-none bg-primaryColor text-white">Get Started</button>
          </div>
        </div>
      </section>
      
      <section id="range">
        <div className="py-16 px-16">
          {/* section header */}
          <div className="text-center mb-10">
            <h2 className="font-bold text-2xl capitalize">browse the range</h2>
            <p className="text-lightGrey text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          {/* section content */}
          <div className="grid grid-flow-col gap-6 grid-cols-3 h-full">
            <div className="h-full text-center">
              <Image
                src='/range1.png'
                width={300}
                height={300}
                alt="furniro logo"
                className="w-auto h-auto"
              />
              <h4 className="font-bold mt-2">Dining</h4>
            </div>
            <div className="h-full text-center">
              <Image
                src='/range2.png'
                width={300}
                height={300}
                alt="furniro logo"
                className="w-auto h-auto"
              />
              <h4 className="font-bold mt-2">Living</h4>
            </div>
            <div className="h-full text-center">
              <Image
                src='/range3.png'
                width={300}
                height={300}
                alt="furniro logo"
                className="w-auto h-auto"
              />
              <h4 className="font-bold mt-2">Bedroom</h4>
            </div>
            
          </div>
        </div>
      </section>

      <section id="products">
        <div className="px-10 xl:px-0 py-16">
          {/* section header */}
          <div className="text-center mb-10">
            <h2 className="font-bold text-2xl capitalize">our products</h2>
          </div>

          {/* section content */}
          <div className="grid grid-cols-4 gap-6">
            
            {products.map((product, i)=> {
              return (
                <div key={i} className="w-full bg-ashColor relative group cursor-pointer">
                {/* overlay */}
                <div className="absolute bottom-0 left-0 right-0 overflow-hidden w-full h-0 group-hover:z-10 group-hover:h-full transition-all duration-200 bg-black bg-opacity-40">
                  <div className="grid place-content-center h-full w-full">
                    <button className="btn px-6 py-2 rounded-none text-primaryColor font-semibold">Add to cart</button>
                    <ul className="mt-3 flex items-center space-x-4">
                      <li className="flex text-xs text-white space-x-1 items-center">
                        <BsShare />
                        <span>Share</span>
                      </li>
                      <li className="flex text-xs text-white space-x-1 items-center">
                        <BsFilter />
                        <span>Compare</span>
                      </li>
                      <li className="flex text-xs text-white space-x-1 items-center">
                        <BsHeart />
                        <span>Like</span>
                      </li>
                    </ul>
                  </div>
                </div>
                {         product.discount &&  
                  <div className="absolute text-sm top-4 right-4 h-10 w-10 grid place-content-center rounded-full bg-opacity-70 bg-red text-white">{`-${product.discount}%`}</div> 
                }                
                {         product.newProduct &&  
                  <div className="absolute text-sm top-4 right-4 h-10 w-10 grid place-content-center rounded-full bg-opacity-90 bg-green text-white">New</div> 
                }                
                <div className=""> 
                  <Image
                      src={product.productImg}
                      width={200}
                      height={200}
                      alt="furniro logo"
                      className="w-full aspect-auto h-auto"
                    />
                    <div className="p-3 space-y-1">
                      <h4 className="font-bold capitalize">{product.title}</h4>
                      <p className="text-xs text-thickAsh">{product.subtitle}</p>
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-sm">
                          {`$${product.newPrice}`}
                        </p>
                        {product.oldPrice &&
                          <p className="font-bold text-xs line-through text-lightAsh">
                          {`$${product.oldPrice}`}
                        </p>}
                      </div>
                    </div>
                </div>
                
              </div>
              )
            })}
           
         
          </div>

          {/* show more button */}
          <div className="mt-10 flex justify-center">
            <button className="btn btn-outline rounded-none px-16 border-primaryColor capitalize text-primaryColor">show more</button>
          </div>
        </div>
      </section>

      <section id="beautiful" className="bg-lighterCream">
            <div className="pl-10 xl:pl-0 py-16 flex items-center">
              <div className="space-y-2">
                <h2 className="font-bold text-3xl max-w-xs mr-auto">50+ Beautiful rooms inspiration</h2>
                <p className="text-sm max-w-xs mr-auto text-lightGrey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est rerum, neque consequatur esse sit.</p>
                <button className="btn rounded-none text-white font-semibold px-8 bg-primaryColor">Explore More</button>
              </div>

              <div className="flex-1 flex space-x-4">
                <div className="h-full relative">
                  <Image 
                  src='/innerpeace.png'
                  width={200}
                  height={200}
                  alt="furniro logo"
                  className="w-full aspect-auto h-auto"
                  />
                  <div className="absolute bottom-4 left-4 flex items-end">
                    <div className="bg-white bg-opacity-60 grid place-content-center px-4  py-6 ">
                      <div className="text-xs text-lightGrey  items-center flex space-x-1">
                        <span>01</span>
                        <span><BsDash /></span>
                        <span>Bed Room</span>
                      </div>
                      <h6 className="font-semibold text-base">Inner Peace</h6>
                    </div>
                    <button className="bg-primaryColor text-white p-2">
                      <BsArrowRight />
                    </button>
                  </div>
                </div>

                

              </div>
            </div>
      </section>
    </>
  );
}
