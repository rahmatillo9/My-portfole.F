
import axios from 'axios';


export const getArticle = async () => {
  try {
    const response = await fetch("http://localhost:4000/articles", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching article:", error);
    throw error; 
  }
};



export const getProject = async () => {
  try {
    const response = await fetch("http://localhost:4000/projects", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching article:", error);
    throw error; 
  }
};



export const handleDelete = async (ProjectId) => {
  try {
    const response = await axios.delete(`http://localhost:4000/projects/${ProjectId}`);
    
    if (response.status === 200) {
      alert('Project deleted successfully');

    }
  } catch (err) {
    console.error('An error occurred while deleting the article:', err);
    alert('Failed to delete the article');
  }
};



export const ArticleDelete = async (articleId) => {
  try {
    const response = await axios.delete(`http://localhost:4000/articles/${articleId}`);
    
    if (response.status === 200) {
      alert('Article deleted successfully');

    }
  } catch (err) {
    console.error('An error occurred while deleting the article:', err);
    alert('Failed to delete the article');
  }
};


