"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLinks from "./NavLinks";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:hidden ml-2">
      <span
        className={`block space-y-2 cursor-pointer relative z-50 px-2`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`h-0.5 w-6 block bg-white transition-all duration-300  ${
            isOpen && "translate-y-[4.5px] rotate-45"
          }`}
        />
        <span
          className={`h-0.5 w-6 block bg-white transition-all duration-300 ${
            isOpen && "-translate-y-[4.5px] -rotate-45"
          } `}
        />
      </span>

      <div
        className={`${
          isOpen ? "w-screen h-screen" : "h-0 w-0"
        }  bg-black overflow-hidden text-white absolute inset-0 transition-all duration-300 flex items-center `}
      >
        <NavLinks
          navLinksFor="mobile"
          onNavItemClick={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
};

export default MobileNav;
