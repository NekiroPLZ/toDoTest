import { Project } from "../models/Project.js";
import { Taskss } from "../models/Task.js";
export class ProjectsController {
  constructor(projectsService) {
    this.projectsService = projectsService;
  }
  createProject = async (req, res) => {
    try {
      const { name, priority, description } = req.body;
      const newProject = await this.projectsService.createProject({ name, priority, description });

      res.status(201).json({ message: "project created", project: newProject });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  getProjectAndTaskById = async(req,res)=>{
    try {
        const {id} = req.params;
        const getQuery = await 

        res.status(200).json(getQuery)
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }


  getAllProjects = async (req, res) => {
    try {
      const getProjects = await this.projectsService.getAllProjects()
      res.status(200).json({ message: "here you go", getProjects });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  getByIdProjects = async (req, res) => {
    try {
      const numberId = req.params.id;
      const getById = await Project.findByPk(numberId);

      if (getById === null || getById === "") {
        res.status(404).json();
      }
      res.status(200).json({ getById });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  updateByIdProject = async (req, res) => {
    try {
      const {id} = req.params;
      const {name,priority, description} = req.body;
      const project = await Project.findByPk(id);
        project.name = name;
        project.priority = priority;
        project.description = description;
        await project.save();
        res.status(200).json(project);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  deleteByIdProjects = async (req, res) => {
    try {
      const numberId = req.params.id;
      const deleteById = await Project.destroy({
        where: {
          id: numberId,
        },
      });
      res.status(204).json({ message: "project was deleted", deleteById });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}
