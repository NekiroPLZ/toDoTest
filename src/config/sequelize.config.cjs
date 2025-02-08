// config/sequelize.config.js
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const DATABASE_URL = process.env.DATABASE_URL;

module.exports = {
  development: {
    url: DATABASE_URL,
    dialect: "postgres",
  },
  test: {
    url: DATABASE_URL,
    dialect: "postgres",
  },
  production: {
    url: DATABASE_URL,
    dialect: "postgres",
  },
};
