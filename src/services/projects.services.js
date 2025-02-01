import { Taskss } from "../models/Task.js";

export class projectService {
  constructor(project) {
    this.project = project;
  }

  getAllProjects = async () => {
    const find = this.project.findAll();
    return find;
  };
  getProjectAndTaskById = async (id) => {
    const projectAndTask = await Taskss.findAll({
      where: { projectId: id },
    });
    return projectAndTask;
  };

  createProject = async ({ name, priority, projectId }) => {
    const creatingProject = await this.project.create({
      name,
      priority,
      projectId,
    });
    return creatingProject;
  };

  getByIdProjects = async (id) => {
    try {
      const findProject = await this.project.findByPk(id);
      return findProject || null;
    } catch (error) {
      throw new Error("error" + " " + error.message);
    }
  };

  updateByIdProject = async (id, name, priority, description) => {
    try {
      const [newData] = await this.project.update(
        {
          name,
          priority,
          description,
        },
        { where: { id }, returning: true }
      );

      if (newData === 0) {
        throw new Error("no hay datos validos rey");
      }

      const findProject = await this.project.findByPk(id);
      return findProject;
    } catch (error) {
      throw new Error("error" + " " + error.message);
    }
  };
  deleteByIdProject = async (id) => {
    try {
      const projectId = await this.project.destroy({
        where: {id},
      });
      return projectId;
    } catch (error) {
      throw new Error("error" + " " + error.message);
    }
  };
}
