import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center gap-8 mb-6">
          <a
            href="https://github.com/rahmatillo9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <i className="fab fa-github text-3xl"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <i className="fab fa-linkedin text-3xl"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <i className="fab fa-twitter text-3xl"></i>
          </a>
        </div>

        <p className="text-gray-400 text-sm mb-2">
          © 2024 Butcher. Barcha huquqlar himoyalangan.
        </p>
        <p className="text-gray-500 text-xs">
          Made with <span className="text-red-500">♥</span> by Rahmatillo.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
