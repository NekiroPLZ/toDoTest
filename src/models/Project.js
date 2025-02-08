import { User } from "./User.js";
import { UserProject } from "./UserProjects.js";
import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Taskss } from "./Task.js";
export const Project = sequelize.define("projects", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  priority: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});

Project.hasMany(Taskss, {
  foreignKey: "projectId",
  sourceKey: "id",
});

Taskss.belongsTo(Project, {
  foreignKey: "projectId",
  targetKey: "id",
});
