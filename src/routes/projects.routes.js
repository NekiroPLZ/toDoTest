import { Router } from "express";
import { ProjectsController } from "../controllers/projects.controller.js";
import { projectService } from "../services/projects.services.js";
import { Project } from "../models/Project.js";
export const projectRouter = () => {
  const projectRouterInstance = Router();
  const projectsServices = new projectService(Project);
    const projectsController = new ProjectsController(projectsServices);
  projectRouterInstance.get("/projects", projectsController.getAllProjects);
  projectRouterInstance.get("/projects/:id", projectsController.getByIdProjects);
  projectRouterInstance.post("/projects",projectsController.createProject);
  projectRouterInstance.put("/projects/:id",projectsController.updateByIdProject);
  projectRouterInstance.delete("/projects/:id", projectsController.deleteByIdProjects);
  projectRouterInstance.get('/projects/:id/tasks', projectsController.getProjectAndTaskById)
  return projectRouterInstance;
};
 