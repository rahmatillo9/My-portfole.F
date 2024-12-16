import React, { useEffect, useState } from "react";
import { getArticle } from "../../service/api"; // Ma'lumotni olish funksiyasini import qiling

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const data = await getArticle();
      setArticles(data);
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 ">
      {articles.map((article) => (
        <div
        
          key={article.id}
          className="border rounded-lg shadow-md overflow-hidden bg-white transform transition-transform duration-300 hover:scale-110"
        >

          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
          
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800">{article.title}</h2>
            <p className="text-gray-600 text-sm mb-4">
              {article.content.length > 200
                ? article.content.slice(0, 200) + "..."
                : article.content}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                By: {article.user.Lastname}
              </span>
              <span className="text-sm text-gray-500">
                {new Date(article.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
