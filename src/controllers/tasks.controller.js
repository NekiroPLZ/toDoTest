import { Taskss } from "../models/Task.js";

export class tasksController {
  constructor(taskModel) {
    this.taskModel = taskModel;
  }

  createTask = async (req, res) => {
    try {
      const { name, status, projectId } = req.body;
      const newTask = await Taskss.create({ name, status, projectId });
      res.status(201).json(newTask);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

  getAllTasks = async (req, res) => {
    try {
      const allTasks = await Taskss.findAll();
      res.status(200).json(allTasks);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };
  getTaskById = async (req, res) => {
    try {
      const { id } = req.params;
      const taskById = await Taskss.findByPk(id);
      res.status(200).json(taskById);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  deleteTask = async (req, res) => {
    try {
      const { id } = req.params;
      const taskDeleteById = await Taskss.destroy({
        where: { id },
      });
      res.status(204).json(taskDeleteById);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  updateTask = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, status, projectId } = req.body;
      const allowedFields = ["name", "status", "projectId"];
      const receivedFields = Object.keys(req.body);
      const invalidFields = receivedFields.filter(
        (field) => !allowedFields.includes(field)
      );
      if (invalidFields.length > 0) {
        return res
          .status(400)
          .json({ message: `Invalid fields: ${invalidFields.join(", ")}` });
      }
      if ((name || status) == "") {
        return res.status(400).json({ message: "no rey" });
      }

      const taskInformation = await Taskss.findByPk(id);
      const updateTask = {
        ...taskInformation,
        name,
        status,
        projectId,
      };
      await taskInformation.update(updateTask);
      res.status(200).json(taskInformation);
    } catch (error) {
      res.status(500).json(error);
    }
  };
}
