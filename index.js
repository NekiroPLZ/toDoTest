import app from "./src/app.js";
import { PORT } from "./src/app.js";
import cors from 'cors';
import './src/models/Associations.js';
import './src/config/config.js';
// Resto de tu código para iniciar la aplicación
const main = async () => {
  try {
    app.use(cors());
    app.listen(PORT, () => {
      console.log(`server running in: ${PORT}`);
    });
  } catch (error) {
    throw new Error("The server doesn't work" + error);
  }
};

main();
