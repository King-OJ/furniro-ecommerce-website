import Image from "next/image"
import Link from "next/link"
import { BsPersonGear, BsSearch, BsHeart, BsCart } from "react-icons/bs";

const links = [
    {
        title: "home",
        destination: "/"
    },
    {
        title: "shop",
        destination: "/shop"
    },
    {
        title: "about",
        destination: "/about"
    },
    {
        title: "contact",
        destination: "/contact"
    },
]

const NavBar = () => {
  return (
    <nav className="navbar shadow-lg bg-base-100 justify-between">
      <a className="btn btn-ghost text-xl">
        <Image
            src='/furniroLogo.png'
            width={100}
            height={100}
            alt="furniro logo"
            className="w-auto h-auto"
            priority
        />
        <h3>Furniro</h3>
      </a>


      <ul className="menu menu-horizontal">
        {links.map((link, i)=> {
            return <li key={i} className="capitalize"><Link href={link.destination}>{link.title}</Link></li>
        })}
    </ul>

    <ul className="flex items-center space-x-3">
        <li className="">
            <button className="btn btn-ghost text-lg"><BsPersonGear /></button>
        </li>
        <li className="">
            <button className="btn btn-ghost text-lg"><BsSearch /></button>
        </li>
        <li className="">
            <button className="btn btn-ghost text-lg"><BsHeart /></button>
        </li>
        <li className="">
            <button className="btn btn-ghost text-lg"><BsCart /></button>
        </li>
    </ul>

    </nav>
  )
}

export default NavBar
