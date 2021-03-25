import "reflect-metadata";
import express from "express";
import "./database/index";
import cors from "cors";
import { router } from "./routes/routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3333, () => {
  console.log("🔥 Server is running in " + "http://localhost:3333");
});

export { app };
