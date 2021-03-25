import "reflect-metadata";
import { createConnection } from "typeorm";

createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "admin",
  password: "123456",
  database: "vender",
  entities: ["./src/models/**.ts"],
}).then(() => console.log("🔥 Banco de dados conectado"));
