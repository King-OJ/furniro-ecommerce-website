"use client";

import Link from "next/link";

export default function error({ error }) {
  console.log(error);

  return (
    <div className="w-full px-6 py-10 text-center">
      Something went wrong. Please refresh the page!
      <Link href="/">
        <button className="btn btn-primary mx-auto my-4 block text-white">
          Back Home
        </button>
      </Link>
    </div>
  );
}
