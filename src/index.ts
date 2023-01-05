import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { AppDataSource } from "./config/data-source";
import budget from "./routes/budget";
import auth from "./routes/auth";
import { isAuthenticated } from "./middlewares/authentication";

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
    app.use("/api/v1/budget", isAuthenticated, budget);
    app.use("/api/v1/auth", auth);
    app.use("/api/v1/", auth);

    app.listen(3333, () => {
      console.log("init server");
    });
  })
  .catch((error) => console.log(error));
