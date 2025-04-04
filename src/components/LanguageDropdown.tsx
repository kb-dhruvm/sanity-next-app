"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LanguageDropdown = () => {
  const pathname = usePathname();

  return (
    <div className="py-1" role="menu">
      <Link
        href={`/en/${pathname.split("/").slice(2).join("/")}`}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
      >
        English
      </Link>
      <Link
        href={`/es/${pathname.split("/").slice(2).join("/")}`}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
      >
        Español
      </Link>
    </div>
  );
};

export default LanguageDropdown;
