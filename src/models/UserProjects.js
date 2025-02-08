import { User } from "./User.js";
import {Project} from "./Project.js"
import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const UserProject = sequelize.define("user_projects",{
    userId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: "users",
            key: "id",
        },
        onDelete: "CASCADE",
    },
    projectId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        references:{
            model: "projects",
            key: "id",
        },
        onDelete: "CASCADE",
    },
});

