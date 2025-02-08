import { Router } from "express";
import { tasksController } from "../controllers/tasks.controller.js";
import { tasksService } from "../services/tasks.services.js";
import { Taskss } from "../models/Task.js";
export const taskRouter = () => {
  const taskRouterInstance = Router();
  const taskServiceInstance = new tasksService(Taskss);
  const taskControllerInstance = new tasksController(taskServiceInstance);
  taskRouterInstance.get("/tasks", taskControllerInstance.getAllTasks);
  taskRouterInstance.get("/tasks/:id", taskControllerInstance.getTaskById);
  taskRouterInstance.post("/tasks", taskControllerInstance.createTask);
  taskRouterInstance.put("/tasks/:id", taskControllerInstance.updateTask);
  taskRouterInstance.delete("/tasks/:id", taskControllerInstance.deleteTask);
  return taskRouterInstance;
};
