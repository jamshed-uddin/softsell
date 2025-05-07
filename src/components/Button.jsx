import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-white px-4 py-1 rounded-lg text-black font-semibold">
      {children}
    </button>
  );
};

export default Button;
