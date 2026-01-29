import api from "../config/api.js";

export const fetchProjects = async () => {
  try {
    const response = await api.get("/projects/getAllProjects");

    return response.data;
  } catch (error) {
    const message = error.response?.data?.error || error.meassage;
    console.error("Error fetching projects:", message);
    throw new Error(message);
  }
};
