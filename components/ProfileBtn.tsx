"use client";
import { useState } from "react";
import ProfileModal from "./ProfileModal";
import { FaCaretDown, FaUserCircle } from "react-icons/fa";
import { Session } from "next-auth";
import Image from "next/image";

export default function ProfileBtn({ session }: { session: Session | null }) {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const user = session?.user;

  return (
    <div className="dropdown dropdown-end dropdown-bottom dropdown-hover  hidden md:block">
      <button
        // onClick={() => {
        //   setIsProfileModalOpen(true);
        // }}
        tabIndex={0}
        role="button"
        className="flex space-x-1 rounded-full p-[.5rem] text-xl hover:bg-lighterCream"
      >
        {user ? (
          <Image
            src={
              user?.image ||
              "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
            }
            alt="profile photo"
            height={40}
            width={40}
            className="w-10 rounded-full"
          />
        ) : (
          <span className="inline-block">
            <FaUserCircle />
          </span>
        )}

        <span className="inline-block">
          <FaCaretDown />
        </span>

        {/* {user && <span className="ml-2">{user?.name || user?.email}</span>} */}
      </button>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
      >
        <li onClick={() => setIsProfileModalOpen(true)}>
          <a>Create Account</a>
        </li>
        <li>
          <a>Login</a>
        </li>
      </ul>
      {/* <ProfileModal
        isProfileModalOpen={isProfileModalOpen}
        closeProfileModal={() => setIsProfileModalOpen(false)}
      /> */}
    </div>
  );
}
