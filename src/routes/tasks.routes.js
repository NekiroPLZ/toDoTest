import { Router } from "express";
import { tasksController } from "../controllers/tasks.controller.js";
export const taskRouter = () => {
  const taskRouterInstance = Router();
  const taskControllerInstance = new tasksController();
  taskRouterInstance.get("/tasks", taskControllerInstance.getAllTasks);
  taskRouterInstance.get("/tasks/:id", taskControllerInstance.getTaskById);
  taskRouterInstance.post("/tasks", taskControllerInstance.createTask);
  taskRouterInstance.put("/tasks/:id", taskControllerInstance.updateTask);
  taskRouterInstance.delete("/tasks/:id", taskControllerInstance.deleteTask);
  return taskRouterInstance;
};
