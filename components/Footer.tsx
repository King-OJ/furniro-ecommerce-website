import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" border-t-2 border-base-200 p-10 pb-5">
      <div className="footer">
        <aside>
          <Image
            src="/furniroLogo.png"
            width={100}
            height={100}
            alt="furniro logo"
            className="h-auto w-auto"
            priority
          />
          <p className="max-w-[250px] text-thickAsh">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </aside>
        <nav className="text-black">
          <h6 className="footer-title">Links</h6>
          <a className="link-hover link">Home</a>
          <a className="link-hover link">Shop</a>
          <a className="link-hover link">About</a>
          <a className="link-hover link">Contact</a>
        </nav>
        <nav className="text-black">
          <h6 className="footer-title">Help</h6>
          <a className="link-hover link">Payment Options</a>
          <a className="link-hover link">Returns</a>
          <a className="link-hover link">Privacy policy</a>
        </nav>

        <form className="text-black">
          <h6 className="footer-title">Newsletter</h6>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Enter your email address"
              className="border-b-2 border-black pb-1 outline-none placeholder:text-xs placeholder:capitalize "
            />
            <button
              type="submit"
              className=" border-b-2 border-black pb-1 uppercase  "
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      <aside className="mt-5 border-t-2 border-base-200 pt-5 text-xs md:text-sm">
        <p>2024 furino. All rights reverved</p>
      </aside>
    </footer>
  );
}
