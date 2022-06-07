import express, { Express, Request, Response } from "express";
import "reflect-metadata";
import morgan from "morgan";

import { configByEnvironment, environmentName, ConfigType } from "./configs/config";
import logger from "./configs/logging";
import example from "./controllers/example";
import { initializeDB, AppDataSource } from "./db/initialize";

const configuration: ConfigType = configByEnvironment(environmentName);
const app: Express = express();
const { port } = configuration;
initializeDB(AppDataSource);
app.use(morgan(configuration.morganFormat));
app.use("/example", example);
app.use(express.static(configuration.frontendStaticFilesPath));
app.get("*", (_req: Request, res: Response): void => {
  res.sendFile(configuration.frontendStaticFilesPath, "index.html");
});
app.listen(port, () => {
  logger.info(`Example app listening on port ${port}`);
});

export { app, AppDataSource };
