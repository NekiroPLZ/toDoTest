import app from "./src/app.js";
import { PORT } from "./src/app.js";
import { sequelize } from "./src/database/database.js";
import cors from 'cors';
const main = async () => {
  try {
    app.use(cors());
    // await sequelize.authenticate();
    // await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`server running in: ${PORT}`);
    });
  } catch (error) {
    throw new Error("The server doesn't work" + error);
  }
};

main();
