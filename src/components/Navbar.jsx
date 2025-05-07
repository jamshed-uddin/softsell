import Link from "next/link";
import React from "react";
import Button from "./Button";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="flex items-center fixed top-0 left-0 right-0  px-2 lg:px-28 py-3 lg:py-1 z-50 bg-black text-white">
      <Link href={"/"} className="font-bold text-xl flex-grow">
        SoftSell
      </Link>
      <NavLinks />
      <Button>Sell my lisences</Button>
      <MobileNav />
    </nav>
  );
};

export default Navbar;
