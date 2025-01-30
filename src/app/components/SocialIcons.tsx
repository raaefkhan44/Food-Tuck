import React from "react";
import { FaTwitter, FaYoutube, FaPinterest, FaInstagram, FaFacebook } from "react-icons/fa";

const SocialIcons = () => {
  const socialLinks = [
    { icon: <FaTwitter />, link: "https://twitter.com", label: "Twitter" },
    { icon: <FaYoutube />, link: "https://youtube.com", label: "YouTube" },
    { icon: <FaPinterest />, link: "https://pinterest.com", label: "Pinterest" },
    { icon: <FaInstagram />, link: "https://instagram.com", label: "Instagram" },
    { icon: <FaFacebook />, link: "https://facebook.com", label: "Facebook" },
  ];

  return (
   
      <div className="flex gap-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="p-3 bg-gray-100 rounded hover:bg-orange-500 hover:text-white transition duration-300"
          >
            {social.icon}
          </a>
        ))}
      </div>

  );
};

export default SocialIcons;
