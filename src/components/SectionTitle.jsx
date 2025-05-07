import React from "react";

const SectionTitle = ({ children, className }) => {
  return <h2 className={`text-3xl font-semibold ${className}`}>{children}</h2>;
};

export default SectionTitle;
