import React from "react";
import ArticleList from "../components/Article/ArticleList";

const About = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 text-white min-h-screen">
      <a href="/Cmaqola">
      <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg shadow-md hover:bg-yellow-300 transition duration-300">
            Maqola qo`shish +
          </button>
      </a>
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-5xl font-extrabold text-yellow-400 mb-10">
          Men Haqimda
        </h2>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
          Men to‘liq stek dasturchiman va zamonaviy veb-ilovalar yaratishga
          ishtiyoqmandman. Har doim yangi texnologiyalarni o‘rganib, o‘z
          ko‘nikmalarimni oshirish ustida ishlayman.
        </p>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10">
          React, Node.js, Express va boshqa bir qator texnologiyalarda chuqur
          bilimga egaman. Yangi loyihalarni yaratish va muammolarni ijodiy
          yechish menga zavq bag'ishlaydi.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <a href="/projects">
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg shadow-md hover:bg-yellow-300 transition duration-300">
            Mening Ishlarim
          </button>
          </a>
        
          <a
            href="https://t.me/PPES571"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-yellow-400 px-8 py-4 rounded-full font-semibold text-lg border border-yellow-400 shadow-md hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            Bog‘lanish
          </a>
        </div>
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-yellow-400 mb-6">
            Mening Qiziqishlarim
          </h3>
          <ArticleList />
        </div>
      </div>
    </div>
  );
};

export default About;
