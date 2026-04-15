import React from "react";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Whitepace</h2>
          <p className="text-sm">
            Take your work everywhere you go. Boost productivity with ease.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Integrations
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* CTA + Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Get Started</h3>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg mb-4 transition">
            Try Today
          </button>

          <div className="flex justify-center md:justify-start gap-4 mt-3">
            <FaFacebook className="cursor-pointer hover:text-white" />
            <FaTwitter className="cursor-pointer hover:text-white" />
            <FaGithub className="cursor-pointer hover:text-white" />
            <FaLinkedin className="cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © 2026 Whitepace. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
