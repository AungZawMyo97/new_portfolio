import projectsData from "../data/projects.json";

export const useProjects = () => {
  const projects = Array.isArray(projectsData)
    ? projectsData
    : projectsData.projects || [];

  return { projects, loading: false, error: null };
};
