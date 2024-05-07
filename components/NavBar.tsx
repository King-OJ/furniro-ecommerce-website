import Image from "next/image";
import Link from "next/link";
import { BsHeart } from "react-icons/bs";
import SearchBox from "./SearchBox";
import ShoppingCartBtn from "./ShoppingCartBtn";
import { redirect } from "next/navigation";
import { getCart } from "@/utils/db/cart";
import { removeFromCart } from "@/utils/actions";
import ProfileBtn from "./ProfileBtn";
import { FaShoppingCart } from "react-icons/fa";

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

const NavBar = async () => {
  const cart = await getCart();

  return (
    <nav className="navbar z-40 justify-between bg-base-100 shadow-lg md:sticky md:top-0">
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

      <button className="mr-2 block md:hidden">
        <ShoppingCartBtn cart={cart} removeFromCart={removeFromCart} />
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
          <ProfileBtn />
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
          <ShoppingCartBtn cart={cart} removeFromCart={removeFromCart} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
