import Image from "next/image";
import Link from "next/link";
import { BsPersonGear, BsSearch, BsHeart, BsCart } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";

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

const NavBar = () => {
  return (
    <nav className="navbar justify-between bg-base-100 shadow-lg">
      <Link href="/" className="btn btn-ghost text-xl">
        <Image
          src="/furniroLogo.png"
          width={100}
          height={100}
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
            <li key={i} className="capitalize">
              <Link href={link.destination}>{link.title}</Link>
            </li>
          );
        })}
      </ul>

      <ul className=" hidden items-center space-x-3 md:flex">
        <li className="">
          <button className="btn btn-ghost text-lg">
            <BsPersonGear />
          </button>
        </li>
        <li className="">
          <button className="btn btn-ghost text-lg">
            <BsSearch />
          </button>
        </li>
        <li className="">
          <button className="btn btn-ghost text-lg">
            <BsHeart />
          </button>
        </li>
        <li className="">
          <button className="btn btn-ghost text-lg">
            <BsCart />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
