import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditProject = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [project, setProject] = useState({
    title: "",
    description: "",
    imageUrl: "",
    url: "",
  });

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/projects/${id}`);
        setProject(response.data);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    fetchProject();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/projects/${id}`, project);
      alert("Project updated successfully!");
      navigate("/projects"); 
    } catch (error) {
      console.error("Error updating project:", error);
      alert("Failed to update the project.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Edit Project</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={project.title}
          onChange={handleInputChange}
          className="w-full p-2 border rounded mb-4"
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={project.description}
          onChange={handleInputChange}
          className="w-full p-2 border rounded mb-4"
        ></textarea>
        <label>Image URL:</label>
        <input
          type="text"
          name="imageUrl"
          value={project.imageUrl}
          onChange={handleInputChange}
          className="w-full p-2 border rounded mb-4"
        />
        <label>Live URL (Optional):</label>
        <input
          type="text"
          name="url"
          value={project.url}
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

export default EditProject;
