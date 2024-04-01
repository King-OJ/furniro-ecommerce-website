import Image from "next/image";
import Link from "next/link";
import { BsPersonGear, BsHeart, BsCart } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import SearchBox from "./SearchBox";
import ShoppingCartBtn from "./ShoppingCartBtn";
import { redirect } from "next/navigation";
import { getCart } from "@/utils/db/cart";

const links = [
  {
    title: "home",
    destination: "/",
  },
  {
    title: "shop",
    destination: "/shop",
  },
  {
    title: "about",
    destination: "/about",
  },
  {
    title: "contact",
    destination: "/contact",
  },
];

async function searchProduct(formData: FormData) {
  "use server";
  const searchQuery = formData.get("searchQuery");
  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

interface NavBarProps {
  openCartModal: () => void;
}

const NavBar = async () => {
  const cart = await getCart();

  return (
    <nav className="navbar justify-between bg-base-100 shadow-lg">
      <Link href="/" className="btn btn-ghost text-xl">
        <Image
          src="/furniroLogo.png"
          width={0}
          height={0}
          sizes="100vw"
          alt="furniro logo"
          className="h-auto w-auto"
          priority
        />
        <h3>Furniro</h3>
      </Link>

      <button className="block md:hidden">
        <HiMenuAlt3 size={30} />
      </button>

      <ul className="menu menu-horizontal hidden md:flex">
        {links.map((link, i) => {
          return (
            <li key={i} className="capitalize ">
              <Link className="hover:bg-lighterCream" href={link.destination}>
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>

      <ul className=" hidden items-center space-x-1 md:flex">
        <li className="">
          <button className="btn btn-circle btn-ghost text-lg hover:bg-lighterCream">
            <BsPersonGear />
          </button>
        </li>
        <li>
          <form action={searchProduct} className="flex items-center">
            <SearchBox />
          </form>
        </li>
        <li className="">
          <button className="btn btn-circle btn-ghost text-lg hover:bg-lighterCream">
            <BsHeart />
          </button>
        </li>
        <li className="">
          <ShoppingCartBtn cart={cart} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
