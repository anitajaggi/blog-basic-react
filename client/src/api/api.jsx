import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

// category code
export const postCategory = async (catData) => {
  return await api.post("/categories", catData);
};

export const getCategories = async () => {
  const catRes = await api.get("/categories");
  return catRes.data;
};

export const deleteCategory = async (catDelId) => {
  return await api.delete(`/categories/${catDelId}`);
};

export const updateCategory = async (catid, eCatData) => {
  return await api.put(`/categories/${catid}`, eCatData);
};

// blog code
export const createBlog = async (blogData) => {
  return await api.post("/blogs", blogData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getBlogs = async () => {
  const blogRes = await api.get("/blogs");
  return blogRes.data;
};

export const deleteBlog = async (blogDelId) => {
  return await api.delete(`/blogs/${blogDelId}`);
};

export const updateBlog = async (blogId, blogData) => {
  return await api.put(`/blogs/${blogId}`, blogData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// message code
export const createMessage = async (messageData) => {
  // for (let pair of messageData.entries()) {
  //   console.log(pair[0] + ": ", pair[1]); // This will show form values correctly
  // }
  return await api.post("/messages", messageData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getMessages = async () => {
  const msgRes = await api.get("/messages");
  return msgRes.data;
};

export const delMessage = async (msgDelId) => {
  return await api.delete(`/messages/${msgDelId}`);
};

// newsletter code
export const createNewsletter = async (subscriber) => {
  return await api.post("/subscriber", subscriber);
};

export const getNewsLetter = async () => {
  const res = await api.get("/subscriber");
  return res.data;
};

export const delSubscriber = async (subDelId) => {
  return await api.delete(`/subscriber/${subDelId}`);
};

// comment code
export const createComment = async (commentData) => {
  await api.post(`/comments`, commentData, {
    headers: { "Content-Type": "application/json" },
  });
};

export const getComments = async (blog_id) => {
  try {
    const response = await api.get(`/comments/${blog_id}`); // Updated URL format
    return response.data; // Return only the comments array
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};

// login
export const loginUser = async (email, password) => {
  try {
    const response = await api.post(
      `/login`,
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );
    // console.log(response);

    return response.data;
  } catch (error) {
    console.error(
      "Login API Error:",
      error.response ? error.response.data : "Network Error"
    );
  }
};
