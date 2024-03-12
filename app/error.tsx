"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // useEffect(() => {
  //   // Log the error to an error reporting service
  //   console.error(error);
  //   console.error(error.message);
  // }, []);

  return (
    <div className="w-full px-6 py-20 text-center">
      <h2>Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="btn btn-primary mx-auto my-4 block text-white"
      >
        Try Again
      </button>
    </div>
  );
}
