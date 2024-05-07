"use client";

import { useEffect, useState } from "react";
import SignInForm from "./SignInForm";
import { FaTimes } from "react-icons/fa";

interface ProfileModalProps {
  isProfileModalOpen: boolean;
  closeProfileModal: () => void;
}

export default function ProfileModal({
  isProfileModalOpen,
  closeProfileModal,
}: ProfileModalProps) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isProfileModalOpen) {
      setTimeout(() => {
        setShowModal(true);
      }, 500);
    }
  }, [isProfileModalOpen]);

  return (
    <div
      onClick={() => {
        setShowModal(false);
        setTimeout(() => {
          closeProfileModal();
        }, 500);
      }}
      className={
        isProfileModalOpen
          ? "fixed bottom-0 left-0 right-0 top-0 z-50 bg-black bg-opacity-30 transition-all duration-200"
          : "hidden transition-all duration-200"
      }
    >
      <div className="flex h-screen w-full items-center">
        <div className="flex-1">
          <div
            className={
              showModal
                ? "translate-y-0 opacity-100 transition-all duration-200"
                : "translate-y-full opacity-0 transition-all duration-200"
            }
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="mx-auto w-[90%] max-w-2xl bg-white px-6 py-4"
            >
              <div className="flex w-full justify-end">
                <button
                  onClick={() => {
                    setShowModal(false);
                    setTimeout(() => {
                      closeProfileModal();
                    }, 500);
                  }}
                  type="button"
                >
                  <FaTimes
                    size={30}
                    fill="#B88E2F"
                    className="rounded-full p-1 hover:bg-cream"
                  />
                </button>
              </div>
              <SignInForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
