import React from "react";

const Label = ({ children, ...props }) => (
  <label className="text-sm font-medium text-gray-700" {...props}>
    {children}
  </label>
);

export default Label;
