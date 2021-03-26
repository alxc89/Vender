import "reflect-metadata";
import express from "express";
import "./database/index";
import cors from "cors";
import { router } from "./routes/routes";

let port;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log("🔥 Server is running in " + "");
});

export { app };
