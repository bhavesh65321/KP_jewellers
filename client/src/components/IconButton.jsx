import React from "react";

const IconButton = ({ icon: Icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center space-x-1 hover:text-yellow-700 transition cursor-pointer"
  >
    <Icon className="text-lg" />
    {label && <span className="text-sm">{label}</span>}
  </button>
);

export default IconButton;
