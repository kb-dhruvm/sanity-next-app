import { sanityFetch } from "@/sanity/lib/live";
import { NAVIGATION_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import React from "react";
import LanguageDropdown from "./LanguageDropdown";

const Header = async () => {
  const { data } = await sanityFetch({
    query: NAVIGATION_QUERY,
    params: {
      type: "header",
    },
  });

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Logo
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {data?.navItems?.map((item) => (
              <div key={item._key} className="relative group">
                {item.haveSubItems ? (
                  <div className="inline-flex items-center">
                    <button
                      className="inline-flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                      aria-expanded="false"
                    >
                      <span>{item.title}</span>
                      <svg
                        className="ml-1 h-5 w-5 transition-transform duration-200 group-hover:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-1" role="menu">
                        {item.subItems?.map((subItem) => (
                          <Link
                            key={subItem._key}
                            href={subItem.link || "#"}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.link || "#"}
                    className="px-3 py-2 text-gray-600 hover:text-gray-900"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}

            <div className="relative group">
              <button
                className="inline-flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                aria-expanded="false"
              >
                <span>Language</span>
                <svg
                  className="ml-1 h-5 w-5 transition-transform duration-200 group-hover:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <LanguageDropdown />
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
