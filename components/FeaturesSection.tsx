import { BsPatchCheck } from "react-icons/bs";
import { HiOutlineTrophy } from "react-icons/hi2";
import { MdSupportAgent } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

export default function FeaturesSection() {
  return (
    <section className="pb-1">
      <div className="bg-cream">
        <div className="px-6 py-10 md:py-12">
          <ul className="grid grid-cols-2 gap-4 text-xs text-black md:grid-cols-4 md:text-sm">
            <li className="flex items-center space-x-2">
              <HiOutlineTrophy size={40} />
              <div className="space-y-1">
                <h6 className="font-semibold text-black">High Quality</h6>
                <p className="text-xs text-thickAsh">
                  Crafted from top materials
                </p>
              </div>
            </li>
            <li className="flex items-center space-x-2">
              <BsPatchCheck size={40} />
              <div className="space-y-1">
                <h6 className="font-semibold text-black">
                  Warranty Protection
                </h6>
                <p className="text-xs text-thickAsh">Over 2 years</p>
              </div>
            </li>
            <li className="flex items-center space-x-2">
              <TbTruckDelivery size={40} />
              <div className="space-y-1">
                <h6 className="font-semibold text-black">Free Shipping</h6>
                <p className="text-xs text-thickAsh">Order over $150</p>
              </div>
            </li>
            <li className="flex items-center space-x-2">
              <MdSupportAgent size={40} />
              <div className="space-y-1">
                <h6 className="font-semibold text-black">24/7 Support</h6>
                <p className="text-xs text-thickAsh">Dedicated support</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
