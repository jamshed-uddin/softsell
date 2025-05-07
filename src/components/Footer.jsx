import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white flex flex-col lg:flex-row justify-between py-6 text-sm mt-14">
      <h3 className="font-bold text-xl ">SoftSell</h3>

      <p>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>{" "}
        &middot;
        <a href="#" className="hover:underline ml-2">
          Terms
        </a>
      </p>
      <h3 className="mb-1">
        © {new Date().getFullYear()} SoftSell. All rights reserved.
      </h3>
    </footer>
  );
};

export default Footer;
