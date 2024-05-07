import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { FaHouse, FaShop } from "react-icons/fa6";
import ProfileBtn from "./ProfileBtn";

export default function BottomNavBar() {
  return (
    <nav className="fixed bottom-0 w-full overflow-hidden md:hidden">
      <div className="flex min-h-[4rem] w-full items-center bg-cream">
        <ul className="grid w-full grid-cols-4 text-center text-lg">
          <li className="flex h-full w-full items-center justify-center">
            <Link
              href="/"
              className="btn btn-circle btn-ghost text-lg hover:bg-lighterCream "
            >
              <FaHouse />
            </Link>
          </li>
          <li className="flex h-full w-full items-center justify-center">
            <Link
              href="/"
              className="btn btn-circle btn-ghost text-lg hover:bg-lighterCream"
            >
              <FaShop />
            </Link>
          </li>
          <li className="flex h-full w-full items-center justify-center">
            <Link
              href="/"
              className="btn btn-circle btn-ghost text-lg hover:bg-lighterCream"
            >
              <FaSearch />
            </Link>
          </li>

          <li className="w-full">
            <ProfileBtn />
          </li>
        </ul>
      </div>
    </nav>
  );
}
