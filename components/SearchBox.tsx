"use client";

import { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function SearchBox() {
  const [showSearchBox, setShowSearchBox] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setShowSearchBox(!showSearchBox)}
        className="btn btn-circle btn-ghost text-lg hover:bg-lighterCream"
      >
        <BsSearch />
      </button>
      <input
        name="searchQuery"
        type="text"
        placeholder="Search..."
        className={
          showSearchBox
            ? "input input-bordered h-[2rem] text-sm transition-all duration-200"
            : "hidden transition-all duration-200"
        }
      />
    </>
  );
}
