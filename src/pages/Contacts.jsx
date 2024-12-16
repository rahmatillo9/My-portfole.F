import React, { useState } from "react";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    alert("Form yuborildi!");
  };

  return (
    <div className="py-16 bg-black-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-purple-500 mb-8">Bog‘lanish</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Sizda savollar yoki fikrlar bormi? Biz bilan bog‘laning!
        </p>


        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 bg-white p-8 rounded-lg shadow-lg">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-lg font-medium">
              Ismingiz
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 mt-2 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-lg font-medium">
              Elektron Pochta
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 text-lg font-medium">
              Xabar
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-purple-500 text-white rounded-md font-medium hover:bg-purple-600 transition"
          >
            Yuborish
          </button>
        </form>


        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800">Boshqa yo‘llar bilan bog‘laning</h3>
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="mailto:ismoilsayfiddinov06@gmail.com"
              className="text-purple-500 hover:text-purple-700 transition"
            >
              Email
            </a>
            <a
              href="tel:+998932688278"
              className="text-purple-500 hover:text-purple-700 transition"
            >
              Telefon
            </a>
            <a
              href="https://t.me/PPES571"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-700 transition"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
