import Link from "next/link";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex items-center fixed top-0 left-0 right-0  px-2 lg:px-28 z-50 bg-black text-white">
      <Link href={"/"} className="font-bold text-xl flex-grow">
        SoftSell
      </Link>
      <ul className="flex justify-between items-center bg-black py-4 gap-5 mr-10">
        <li>How it works</li>
        <li>Why us </li>
        <li>Testimonials </li>
        <li>Contact</li>
      </ul>
      <Button>Sell my lisences</Button>
    </nav>
  );
};

export default Navbar;
