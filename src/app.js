import express from "express";
import { projectRouter } from "./routes/projects.routes.js";
import { taskRouter } from "./routes/tasks.routes.js";
const app = express();
app.use(express.json());

app.use('/',projectRouter());
app.use('/', taskRouter());
export const PORT = 3000;

export default app;
