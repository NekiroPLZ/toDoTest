import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const User = sequelize.define("users",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_role:{
        type: DataTypes.STRING,
        allowNull:false,  
    },
    user_email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    user_password:{
        type: DataTypes.STRING,
        allowNull:false,
    }
});
