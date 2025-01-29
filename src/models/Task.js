import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Taskss = sequelize.define('tasks',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'pending'
    }
});