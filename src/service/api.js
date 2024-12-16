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
    throw error; // Agar xatolik bo'lsa, tashqarida ham ishlatish uchun throw qilamiz
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

