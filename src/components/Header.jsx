import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <ul className="flex justify-between items-center bg-black py-4">
        <li>
          <Link href={"/"}>SeftSell</Link>
        </li>
        <li>
          {" "}
          <button>Sell my lisences</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
