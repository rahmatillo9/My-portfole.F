import React from "react";
import Me from '../images/Me.jsg.jpg';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 text-white">
      <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
        <img
          src={Me}
          alt="Me"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-lg border-4 border-white"
        />
      </div>
      <div className="text-center md:text-left max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Salom, Men <span className="text-yellow-400">Rahmatillo</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Men zamonaviy va funksional veb-ilovalar yasayman.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <a href="projects">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-300   transform transition-transform duration-300 hover:scale-105">
              Mening Ishlarim
            </button>
          </a>
         <a href="/about">
         <button type="button" class="text-white bg-gradient-to-br px-6 py-3 from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm text-center me-2 mb-2  transform transition-transform duration-300 hover:scale-105">Mening qiziqishlarim</button>
         </a>
         
          <a
            href="https://t.me/PPES571"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-purple-500 px-6 py-3 rounded-lg font-medium border border-purple-500 hover:bg-purple-100   transform transition-transform duration-300 hover:scale-105"
          >
            Telegram orqali
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
