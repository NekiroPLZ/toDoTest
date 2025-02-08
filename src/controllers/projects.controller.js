export class ProjectsController {
  constructor(projectsService) {
    this.projectsService = projectsService;
  }
  createProject = async (req, res) => {
    try {
      const { name, priority, description } = req.body;
      const newProject = await this.projectsService.createProject({
        name,
        priority,
        description,
      });

      res.status(201).json({ message: "project created", project: newProject });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  getProjectAndTaskById = async (req, res) => {
    try {
      const { id } = req.params;
      const getQuery = await this.projectsService.getProjectAndTaskById(id);
      res.status(200).json(getQuery);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  getAllProjects = async (req, res) => {
    try {
      const getProjects = await this.projectsService.getAllProjects();
      res.status(200).json({ message: "here you go", getProjects });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  getByIdProjects = async (req, res) => {
    try {
      const { id } = req.params;
      const getById = await this.projectsService.getByIdProjects(id);
      if (getById === null || getById === "") {
        return res.status(404).json();
      }
      res.status(200).json({ getById });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  updateByIdProject = async (req, res) => {
    const { id } = req.params;
    const { name, priority, description } = req.body;
    try {
      const project = await this.projectsService.updateByIdProject(
        id,
        name,
        priority,
        description
      );
      res.status(200).json(project);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  deleteByIdProject = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteById = await this.projectsService.deleteByIdProject(id);
      res.status(204).json({ message: "project was deleted", deleteById });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}
