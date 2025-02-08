export class tasksService {
  constructor(task) {
    this.task = task;
  }

  createTask = async ({ name, status, projectId }) => {
    try {
      const createTaskQuery = await this.task.create({
        name,
        status,
        projectId,
      });
      return createTaskQuery;
    } catch (error) {
      throw new Error("create a task has failed", error);
    }
  };

  getAllTasks = async () => {
    try {
      const getAllTaskQuery = await this.task.findAll();
      return getAllTaskQuery;
    } catch (error) {
      throw new Error("get a task has failed", error);
    }
  };

  getTaskById = async (id) => {
    try {
      const getTaskByIdQuery = await this.task.findByPk(id);
      return getTaskByIdQuery;
    } catch (error) {
      throw new Error(`get a task by his id has failed ${error.message}`);
    }
  };

  updateTask = async (id, name, status, projectId) => {
    try {
      const [updateTaskObj] = await this.task.update(
        {
          name,
          status,
          projectId,
        },
        { where: { id } }
      );
      if (updateTaskObj === 0) {
        throw new Error("no valid data");
      }
      const findTask = await this.task.findByPk(id);
      return findTask;
    } catch (error) {
        throw new Error(`update a task has failed: ${error.message}`);
    }
  };
  getTaskById = async(id)=>{
    try {
        const getTaskByIdQuery = await this.task.findByPk(id);
        return getTaskByIdQuery;
    } catch (error) {
        throw new Error(`getting a task has failed: ${error.message}`);
        
    }
  }

  deleteTask = async(id)=>{
    try {
        const deleteTaskById  = this.task.destroy({
            where:{id},
        })
        return deleteTaskById;
    } catch (error) {
        throw new Error(`delete a task has failed: ${error.message}`);
    }
  }
}
