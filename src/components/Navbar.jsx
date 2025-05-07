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
        <li>
          <Link href={"#how-it-works"}>How it works</Link>
        </li>
        <li>
          <Link href={"#why-us"}>Why us</Link>
        </li>
        <li>
          <Link href={"#reviews"}>Testimonials</Link>
        </li>
        <li>
          <Link href={"#contact-us"}>Contact</Link>
        </li>
      </ul>
      <Button>Sell my lisences</Button>
    </nav>
  );
};

export default Navbar;
