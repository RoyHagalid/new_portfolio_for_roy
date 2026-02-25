"use client"
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pages = [{name: "Projects", url: "/"}, {name: "About", url: "/about"}];
  //  {name: "Blog", url: "/blog"}
  let pathname = usePathname();
  // Fallback: treat undefined, empty, or null as "/"
  if (!pathname || pathname === "") {
    pathname = "/";
  }

  return (
    <nav className="md:w-[50%] flex justify-start items-end">
      {pages.map((page) => {
        const isActive = pathname === page.url;
        return (
          <Link
            href={`${page.url.toLowerCase()}`}
            key={page.name}
            className={`custom-mouse-pointer ${isActive ? "w-[178px] text-[24px] md:text-[36px] font-space-mono md:w-[50%] h-[76]  shadow-nav  z-[13]" : "w-[159px] text-[20px] md:text-[32px] md:w-[45%] pb-4 -mb-4 h-[80px] z-[1] "} flex items-center rounded-t-xl justify-center font-medium ${isActive ? "bg-[#E8D5B0]" : "bg-[#9E9178] hover:bg-[#C3B394]"}`}
          >
            {page.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
