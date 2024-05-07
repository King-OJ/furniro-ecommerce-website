"use client";
import { useState } from "react";
import ProfileModal from "./ProfileModal";
import { FaUserCircle } from "react-icons/fa";

export default function ProfileBtn() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsProfileModalOpen(true);
        }}
        className="btn btn-circle btn-ghost text-lg hover:bg-lighterCream"
      >
        <FaUserCircle />
      </button>
      <ProfileModal
        isProfileModalOpen={isProfileModalOpen}
        closeProfileModal={() => setIsProfileModalOpen(false)}
      />
    </>
  );
}
