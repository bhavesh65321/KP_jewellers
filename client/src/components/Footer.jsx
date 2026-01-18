import { Link } from "react-router-dom";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { navItems } from "../constants/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Brand & Description */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-yellow-400 mb-4">
            KP JEWELLERS
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Your trusted destination for exquisite gold, silver, and platinum jewellery. 
            Quality craftsmanship since generations.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-yellow-400 inline-block pb-1">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-yellow-400 transition">
                All Jewellery
              </Link>
            </li>
            {navItems.slice(0, 3).map((item, idx) => (
              <li key={idx}>
                <Link to={item.href} className="hover:text-yellow-400 transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-yellow-400 inline-block pb-1">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-3">
              <FaPhone className="text-yellow-400" /> 
              <span>+91 XXXXX XXXXX</span>
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-yellow-400" /> 
              <span>WhatsApp Us</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400" /> 
              <span>info@kpjewellers.com</span>
            </li>
            <li className="flex items-center gap-4 mt-4">
              <a href="#" className="hover:text-yellow-400 transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                <FaTwitter size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-sm text-center py-4 px-2 text-gray-300">
        <p>
          Copyright © {currentYear}{" "}
          <span className="text-yellow-400 font-semibold">KP Jewellers</span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
