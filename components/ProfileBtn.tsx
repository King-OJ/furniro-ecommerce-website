"use client";
import { useState } from "react";
import { BsPersonGear } from "react-icons/bs";
import ProfileModal from "./ProfileModal";

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
        <BsPersonGear />
      </button>
      <ProfileModal
        isProfileModalOpen={isProfileModalOpen}
        closeProfileModal={() => setIsProfileModalOpen(false)}
      />
    </>
  );
}
