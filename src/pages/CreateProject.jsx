import React, { useState } from 'react';
import axios from 'axios';

const CreateProject = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous success/error messages
    setError('');
    setSuccess('');

    // Validation
    if (!title || !description) {
      setError('Title and description are required!');
      return;
    }

    if (url && !isValidUrl(url)) {
      setError('Please enter a valid URL for the project.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/projects', {
        title,
        description,
        imageUrl,
        url,
      });

      if (response.status === 201) {
        // Reset form fields
        setTitle('');
        setDescription('');
        setImageUrl('');
        setUrl('');
        setSuccess('Project created successfully!');
      }
    } catch (err) {
      setError('An error occurred while creating the project. Please try again.');
    }
  };

  // Helper function to validate URLs
  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">Create New Project</h2>

      {error && <div className="text-red-600 bg-red-100 p-3 rounded mb-4">{error}</div>}
      {success && <div className="text-green-600 bg-green-100 p-3 rounded mb-4">{success}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
            Title<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter project title"
            aria-required="true"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="description">
            Description<span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter project description"
            rows="5"
            aria-required="true"
          ></textarea>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="imageUrl">
            Image URL (Optional)
          </label>
          <input
            type="text"
            id="imageUrl"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter an image URL"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="url">
            Project URL (Optional)
          </label>
          <input
            type="text"
            id="url"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter project URL"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Create Project
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
