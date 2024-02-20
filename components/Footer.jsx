import Image from "next/image"

export default function Footer() {
  return (
    <footer className=" p-10 border-t-2 border-base-200">
        <div className="footer ">
            <aside>
            <Image
                        src='/furniroLogo.png'
                        width={100}
                        height={100}
                        alt="furniro logo"
                        className="w-auto h-auto"
                        priority
                    />
                <p className="max-w-[250px] text-thickAsh">400 University Drive Suite 200 Coral Gables,
                    FL 33134 USA</p>
            </aside> 
            <nav className="text-black">
                <h6 className="footer-title">Links</h6> 
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Shop</a>
                <a className="link link-hover">About</a>
                <a className="link link-hover">Contact</a>
            </nav> 
            <nav className="text-black">
                <h6 className="footer-title">Help</h6> 
                <a className="link link-hover">Payment Options</a>
                <a className="link link-hover">Returns</a>
                <a className="link link-hover">Privacy policy</a>
            </nav> 
            
            <form className="text-black">
                <h6 className="footer-title">Newsletter</h6> 
                <div className="flex items-center space-x-4">
                    <input type="text" placeholder="Enter your email address" className="placeholder:text-xs placeholder:capitalize outline-none pb-1 border-black border-b-2 " /> 
                    <button type="submit" className=" pb-1 uppercase border-black border-b-2 text-xs font-semibold">Subscribe</button>
                </div>
            
            </form>
        </div>

        <aside className="pt-5 mt-5 border-t-2 border-base-200">
            <p>2023 furino. All rights reverved</p>
        </aside>

        
    </footer>
  )
}
