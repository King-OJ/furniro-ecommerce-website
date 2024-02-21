import { BsShare, BsFilter, BsHeart} from "react-icons/bs";
import Image from "next/image"

export default function SingleProduct({ product }) {

    const {
        title,
        subtitle,
        newPrice,
        oldPrice,
        productImg,
        discount,
        newProduct 
      } = product

  return (
    <div className="w-full bg-ashColor relative group cursor-pointer">
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
                {         discount &&  
                  <div className="absolute text-sm top-4 right-4 h-10 w-10 grid place-content-center rounded-full bg-opacity-70 bg-red text-white">{`-${discount}%`}</div> 
                }                
                {         newProduct &&  
                  <div className="absolute text-sm top-4 right-4 h-10 w-10 grid place-content-center rounded-full bg-opacity-90 bg-green text-white">New</div> 
                }                
                <div className=""> 
                  <Image
                      src={productImg}
                      width={200}
                      height={200}
                      alt="furniro logo"
                      className="w-full aspect-auto h-auto"
                    />
                    <div className="p-3 space-y-1">
                      <h4 className="font-bold capitalize">{title}</h4>
                      <p className="text-xs text-thickAsh">{subtitle}</p>
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-sm">
                          {`$${newPrice}`}
                        </p>
                        {oldPrice &&
                          <p className="font-bold text-xs line-through text-lightAsh">
                          {`$${oldPrice}`}
                        </p>}
                      </div>
                    </div>
                </div>
                
              </div>
  )
}
