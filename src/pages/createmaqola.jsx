import React, { useState } from 'react';
import axios from 'axios'; 

const CreateMaqola = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  const authorId = 1; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title || !content) {
      setError('Title and content are required!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/articles', {
        title,
        content,
        imageUrl,
        authorId, 
      });

      if (response.status === 201) {
        setTitle('');
        setContent('');
        setImageUrl('');
        setError('');

        alert('Article created successfully');
      }
    } catch (err) {
      setError('An error occurred while creating the article.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Create New Article</h2>
      
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="w-full p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="content">Content</label>
          <textarea
            id="content"
            className="w-full p-2 border rounded"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="imageUrl">Image URL (Optional)</label>
          <input
            type="text"
            id="imageUrl"
            className="w-full p-2 border rounded"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Create Article
        </button>
      </form>
    </div>
  );
};

export default CreateMaqola;
