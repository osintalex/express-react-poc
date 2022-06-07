import { DataSource } from "typeorm";

import { configByEnvironment, environmentName, ConfigType } from "../configs/config";
import logger from "../configs/logging";

const configuration: ConfigType = configByEnvironment(environmentName);
const AppDataSource: DataSource = new DataSource({
  type: configuration.sqlType,
  host: configuration.sqlHost,
  port: configuration.sqlPort,
  username: configuration.sqlUsername,
  password: configuration.sqlPassword,
  database: configuration.sqlDatabase,
  entities: configuration.sqlEntities,
  synchronize: configuration.sqlSynchronize,
  logging: configuration.sqlLogging,
});

/**
 * Utility function to initialize a database. Will create
 * a new table if one doesn't exist yet with the scheme defined
 * by the entities in models/
 *
 * @param db - the database
 */
const initializeDB = (db: DataSource): void => {
  db.initialize()
    .then(async (): Promise<void> => {})
    .catch((error: string): void => {
      logger.error(error);
    });
};
export { initializeDB, AppDataSource };

if (require.main === module) {
  initializeDB(AppDataSource);
  logger.info("Database successfully initialized!");
  process.exit();
}
