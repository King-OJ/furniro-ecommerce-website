import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function SectionHeader({ title }: { title: string }) {
  return (
    <div id="header" className="min-h-[10vh] overflow-hidden md:min-h-[20vh]">
      <div className="relative w-full">
        <Image
          src="/shopHeaderImg.png"
          width={0}
          height={0}
          sizes="100vw"
          alt="furniro page header"
          className="aspect-auto h-full w-full"
          priority
        />
        <div className="absolute inset-0 bg-white bg-opacity-5">
          <div className="grid h-full place-content-center ">
            <div className="flex flex-col items-center space-y-2">
              <Image
                src="/furniroLogo.png"
                width={0}
                height={0}
                sizes="100vw"
                alt="furniro logo"
                className="h-auto w-auto"
                priority
              />

              <h3 className="text-2xl font-semibold tracking-widest md:text-3xl">
                {title}
              </h3>

              <div className="flex items-center text-xs md:text-sm">
                <Link href="/" className="font-semibold">
                  Home
                </Link>
                <span className="mx-2">
                  <FaChevronRight className="font-extrabold " />
                </span>
                <p>{title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
