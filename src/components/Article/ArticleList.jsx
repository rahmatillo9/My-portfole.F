import React, { useEffect, useState } from "react";
import { ArticleDelete, getArticle } from "../../service/api"; 
import { useNavigate } from "react-router-dom";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate(); 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getArticle();
        setArticles(data);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      }
    };

    fetchData();
  }, []);


  const handleDelete = async (articleId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this article?");
    if (!confirmDelete) return;

    try {
      await ArticleDelete(articleId);

      setArticles(articles.filter((article) => article.id !== articleId));
      alert("Article deleted successfully!");
    } catch (error) {
      console.error("Error deleting article:", error);
      alert("Failed to delete the article.");
    }
  };

  
  const handleEdit = (articleId) => {
    navigate(`/EditeArticle/${articleId}`); 
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {articles.map((article) => (
        <div
          key={article.id}
          className="border rounded-lg shadow-md overflow-hidden bg-white transform transition-transform duration-300 hover:scale-105"
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
              <span className="text-sm text-gray-500">By: {article.user?.Lastname || "Unknown"}</span>
              <span className="text-sm text-gray-500">
                {new Date(article.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="flex justify-end my-5">
              <button
                onClick={() => handleDelete(article.id)}
                type="button"
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Delete
              </button>
              <button
                onClick={() => handleEdit(article.id)}
                type="button"
                className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
