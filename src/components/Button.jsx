import React from "react";

const Button = ({ children, className, loading, ...props }) => {
  return (
    <button
      {...props}
      disabled={loading}
      className={`bg-white px-4 py-1 rounded-lg text-black font-semibold cursor-pointer active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
