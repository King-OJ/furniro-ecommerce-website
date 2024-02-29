import { BsCartX } from "react-icons/bs";


export default function ShoppingCart() {
  return (
    <div className="fixed right-0 top-0 bg-white z-20">
      <div className="min-w-72 divide-y-2 px-6 py-8">
        <div className="flex justify-between items-start">
            <h5 className="font-semibold flex-1 pb-4 border-lightAsh border-b">Shopping Cart</h5>
            <button className="text-lightAsh pl-6 pt-1 text-lg">
                <BsCartX />
            </button>
        </div>
        
      </div>
    </div>
  )
}
