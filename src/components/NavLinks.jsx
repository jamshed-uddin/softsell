import Link from "next/link";
import React from "react";
const navItems = [
  {
    name: "How it works",
    link: "#how-it-works",
  },
  {
    name: "Why choose us",
    link: "#why-choose-us",
  },
  {
    name: "Testimonials",
    link: "#reviews",
  },
  {
    name: "Contact",
    link: "#contact-us",
  },
];
const NavLinks = ({ navLinksFor = "desktop", onNavItemClick }) => {
  return (
    <ul
      className={`${
        navLinksFor === "desktop"
          ? "lg:flex justify-between items-center hidden bg-black py-4 gap-6 mr-10"
          : "text-5xl font-semibold space-y-5 ml-2"
      }`}
    >
      {navItems.map((item) => (
        <li key={item.name} onClick={onNavItemClick}>
          <Link href={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
