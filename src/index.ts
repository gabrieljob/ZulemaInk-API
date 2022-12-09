import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { AppDataSource } from "./config/data-source";
import status from "./routes/status";
import service from "./routes/service";
import budget from "./routes/budget";

AppDataSource.initialize()
  .then(() => {
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );
    app.use("/api/v1/status", status);
    app.use("/api/v1/service", service);
    app.use("/api/v1/budget", budget);

    app.listen(3333, () => {
      console.log("init server");
    });
  })
  .catch((error) => console.log(error));
