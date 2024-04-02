import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" border-t-2 border-ashColor p-6 pb-5 md:p-10">
      <div className="footer">
        <aside className="md:col-start-1">
          <Image
            src="/furniroLogo.png"
            width={100}
            height={100}
            alt="furniro logo"
            className="h-auto w-auto"
            priority
          />
          <p className="max-w-[250px] text-xs leading-6 text-thickAsh md:text-sm ">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </aside>
        <nav className="col-start-1 text-xs text-black md:col-start-2 md:text-sm">
          <h6 className="footer-title">Links</h6>
          <a className="link-hover link">Home</a>
          <a className="link-hover link">Shop</a>
          <a className="link-hover link">About</a>
          <a className="link-hover link">Contact</a>
        </nav>
        <nav className="col-start-2 text-xs text-black md:col-start-3 md:text-sm">
          <h6 className="footer-title">Help</h6>
          <a className="link-hover link">Payment Options</a>
          <a className="link-hover link">Returns</a>
          <a className="link-hover link">Privacy policy</a>
        </nav>

        <form className="col-start-1 col-end-3 w-full text-xs text-black md:col-start-4 md:col-end-5 md:text-sm">
          <h6 className="footer-title">Newsletter</h6>
          <div className="flex w-full items-center space-x-8">
            <input
              type="text"
              placeholder="Enter your email address"
              className="flex-1 border-b-2 border-black pb-1 outline-none placeholder:text-xs placeholder:capitalize "
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
