import React from 'react';
import ProjectList from '../components/Project/projectList';

const Projects = () => {
  return (
    <div className="min-h-screen bg-violet-600 p-6">

<a href="/Cproject">
      <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold text-lg shadow-md hover:bg-yellow-300 transition duration-300">
            Project qo`shish +
          </button>
      </a>
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Projects</h1>
      <ProjectList />
    </div>
  );
};

export default Projects;