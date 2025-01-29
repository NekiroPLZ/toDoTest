import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "ToDoSequelize",
  "postgres",
  "Matiblackops2-",
  {
    host: "localhost",
    dialect: "postgres",
  }
);
