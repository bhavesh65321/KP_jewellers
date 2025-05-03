import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <p>
        &copy; {new Date().getFullYear()} Radiant Gems. All rights reserved.
      </p>
      <div className="mt-4 flex justify-center gap-6 text-sm">
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="hover:underline">
          Terms of Service
        </a>
        <a href="#" className="hover:underline">
          Contact Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;
