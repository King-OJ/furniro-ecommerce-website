import FeaturesSection from "@/components/FeaturesSection";
import FormRow from "@/components/FormRow";
import SectionHeader from "@/components/SectionHeader";
import { MdLocationPin, MdLockClock, MdPhone } from "react-icons/md";

const page = () => {
  return (
    <section>
      <SectionHeader>Contact</SectionHeader>
      <div className="space-y-14 p-6 md:p-10">
        <div className="mx-auto mt-6 max-w-xl space-y-2 text-center">
          <h5 className="text-2xl font-bold">Get in Touch With Us</h5>
          <p className="text-sm text-lightAsh">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <div className="grid-flow-cols grid w-full grid-cols-3 gap-8">
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="mr-6">
                  <MdLocationPin size={21} />
                </div>
                <span className="inline-block ">
                  <h6 className="font-semibold">Address</h6>
                  <p className="text-sm">
                    236 5th SE Avenue, New York NY10000, United States
                  </p>
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-6">
                  <MdPhone size={21} />
                </div>
                <span className="inline-block">
                  <h6 className="font-semibold">Phone</h6>
                  <div className="space-y-2">
                    <p className="text-sm">Mobile: +(84) 546-6789</p>
                    <p className="text-sm">Hotline: +(84) 456-6789</p>
                  </div>
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-6">
                  <MdLockClock size={21} />
                </div>
                <span className="inline-block">
                  <h6 className="font-semibold">Working Time</h6>
                  <div className="space-y-2">
                    <p className="text-sm">Monday-Friday: 9:00 - 22:00</p>
                    <p className="text-sm"> Saturday-Sunday: 9:00 - 21:00</p>
                  </div>
                </span>
              </li>
            </ul>

            <div className="col-span-2">
              <form action="" className="w-full">
                <FormRow title="Your name" name="contact_name" type="text" />
                <FormRow title="Your email" name="contact_email" type="email" />
                <FormRow title="Subject" name="subject" type="text" />
                <FormRow title="Message" name="contact_message" textArea />
                <button className="btn btn-primary mt-8 block min-w-[150px] rounded-[4px]">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <FeaturesSection />
    </section>
  );
};

export default page;
