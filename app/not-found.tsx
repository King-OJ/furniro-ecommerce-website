import Link from "next/link";

export default function notFoundPage() {
  return (
    <div className="w-full px-6 py-20 text-center">
      Page not found! Check there URL or navigate back home.
      <Link href="/">
        <button className="btn btn-primary mx-auto my-4 block text-white">
          Back Home
        </button>
      </Link>
    </div>
  );
}
