import Image from "next/image";
import { BsCartX } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";


export default function ShoppingCart() {
  return (
    <div className="fixed right-0 top-0 bg-white z-20">
      <div className="min-w-80 min-h-96 flex flex-col justify-between py-4">
        <div className="px-4">
          <div className="flex justify-between items-start">
            <h5 className="font-semibold flex-1 pb-4 border-lightAsh border-b">Shopping Cart</h5>
            <button className="text-lightAsh pl-6 pt-1 text-lg">
                <BsCartX />
            </button>
        </div>
        <ul className="space-y-3 w-full mt-4">
          <li className="flex items-center space-x-1 justify-between">
            <div className="space-x-2 flex items-center">
              <div className="h-[50px] w-[50px] p-1 overflow-hidden grid place-content-center bg-cream rounded-md">
              <Image 
                alt="furniro"
                    src='/Mask group.png'
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="w-auto h-auto"
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
            
            <IoCloseCircle fill="#898989"/>
          </li>
          <li className="flex items-center space-x-1 justify-between">
            <div className="space-x-2 flex items-center">
              <div className="h-[50px] w-[50px] overflow-hidden grid place-content-center bg-cream rounded-md">
              <Image 
                alt="furniro"
                    src='/Asgaard sofa 5.png'
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="w-auto h-auto"
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
            
            <IoCloseCircle fill="#898989"/>
          </li>
        </ul>
        </div>
        
        <div>
          <div className="flex items-center text-sm space-x-3 pb-4 px-4">
          <p className="font-semibold">Subtotal :</p>
          <p className="text-primaryColor">Usd 250,000.00</p>
        </div>
        
          <ul className="pt-4 border-lightAsh border-t px-4 flex items-center justify-between">
            <li><button className="btn h-8 px-3 rounded-full btn-outline ">cart</button></li>
            <li><button className="btn h-8 px-3 rounded-full btn-outline ">checkout</button></li>
            <li><button className="btn h-8 px-3 rounded-full btn-outline ">comparison</button></li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}
