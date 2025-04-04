import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="relative size-60 mx-auto">
          <Image
            src="/404.svg"
            alt="404 illustration"
            fill
            className="object-contain"
            priority
          />
        </div>

        <h1 className="text-6xl font-bold text-gray-900 tracking-tight">404</h1>

        <h2 className="text-3xl font-semibold text-gray-800">Page Not Found</h2>

        <p className="text-lg text-gray-600 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It
          might have been moved or doesn&apos;t exist.
        </p>

        <div className="pt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}
