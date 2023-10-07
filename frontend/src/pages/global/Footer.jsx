import React from "react";
import { FiInstagram, FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-black text-white mt-10">
      <div className="container mx-auto flex flex-col md:flex-row gap-10 justify-between items-start w-full">
        <div className="flex justify-between gap-10 left-footer">
          <div>
            <span className="font-semibold text-lg">Helps & Information</span>
            <ul className="mt-3">
              <li>FAQ</li>
              <li>Accessibility</li>
              <li>Help Center</li>
            </ul>
          </div>
          <div>
            <span className="font-semibold text-lg">Pages</span>
            <ul>
              <li>Home</li>
              <li>Our Products</li>
              <li>Contact Us</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
        <div className="right-footer">
          <div className="social-media">
            <span className="font-semibold text-lg">Social Media</span>
            <div className="flex gap-3 text-2xl mt-2">
              <FiInstagram />
              <FiFacebook />
              <FiTwitter />
              <FiYoutube />
            </div>
          </div>
          <div className="subs-newsletter mt-3">
            <span className="block mb-2 font-semibold text-lg">Sign Up</span>
            <input type="text" className="lg:w-72 w-full py-1 px-5" />
            <button className="bg-black text-white border border-white py-1 px-3 lg:ml-1">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
