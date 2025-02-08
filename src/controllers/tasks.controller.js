import { Taskss } from "../models/Task.js";

export class tasksController {
  constructor(taskServices) {
    this.taskServices = taskServices;
  }

  createTask = async (req, res) => {
    try {
      const { name, status, projectId } = req.body;
      const newTask = await this.taskServices.createTask({
        name,
        status,
        projectId,
      });
      res.status(201).json(newTask);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

  getAllTasks = async (req, res) => {
    try {
      const allTasks = await this.taskServices.getAllTasks();
      res.status(200).json(allTasks);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };
  getTaskById = async (req, res) => {
    try {
      const { id } = req.params;
      const taskById = await this.taskServices.getTaskById(id);
      res.status(200).json(taskById);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  deleteTask = async (req, res) => {
    try {
      const { id } = req.params;
      const taskDeleteById = await this.taskServices.deleteTask(id);
      res.status(204).json(taskDeleteById);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  updateTask = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, status, projectId } = req.body;
      const taskData = await this.taskServices.updateTask(
        id,
        name,
        status,
        projectId
      );
      res.status(200).json(taskData);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}
