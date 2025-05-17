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
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-yellow-400 inline-block">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-yellow-400 transition">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-yellow-400 inline-block">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaPhone /> <span>Call</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaWhatsapp /> <span>Whatsapp</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope /> <span>Email</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaFacebook /> <span>Facebook</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaInstagram /> <span>Instagram</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaTwitter /> <span>Twitter</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-sm text-center py-4 px-2 text-gray-300">
        <p>
          Copyright © 2025{" "}
          <span className="text-yellow-400 font-semibold">KP Jewellers</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
