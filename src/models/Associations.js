import { User } from "./User.js";
import { Project } from "./Project.js";
import { UserProject } from "./UserProjects.js";

// Define associations
User.belongsToMany(Project, { through: UserProject, foreignKey: "userId" });
Project.belongsToMany(User, { through: UserProject, foreignKey: "projectId" });