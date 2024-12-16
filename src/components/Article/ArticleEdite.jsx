import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditArticle = () => {
  const { id } = useParams(); 
  const [article, setArticle] = useState({ title: "", content: "", imageUrl: "" });

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/articles/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/articles/${id}`, article);
      alert("Article updated successfully!");
    } catch (error) {
      console.error("Error updating article:", error);
      alert("Failed to update the article.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Edit Article</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={article.title}
          onChange={handleInputChange}
          className="w-full p-2 border rounded mb-4"
        />
        <label>Content:</label>
        <textarea
          name="content"
          value={article.content}
          onChange={handleInputChange}
          className="w-full p-2 border rounded mb-4"
        ></textarea>
        <label>Image URL:</label>
        <input
          type="text"
          name="imageUrl"
          value={article.imageUrl}
          onChange={handleInputChange}
          className="w-full p-2 border rounded mb-4"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditArticle;
