"use client";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import MobileProfileModal from "./MobileProfileModal";

export default function MobileProfileBtn() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => {
          setIsProfileModalOpen(true);
        }}
        className="btn btn-circle btn-ghost text-lg hover:bg-lighterCream"
      >
        <FaUserCircle />
      </button>
      <MobileProfileModal
        isProfileModalOpen={isProfileModalOpen}
        closeProfileModal={() => setIsProfileModalOpen(false)}
      />
    </div>
  );
}
