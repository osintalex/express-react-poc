/* eslint-disable max-classes-per-file */
import path from "path";
import User from "../models/user";

/**
 * Generic config class that the others all extend from.
 *
 * This is a very pythonic way of doing api configuration but
 * I still think it's useful in Typescript so have stuck with it.
 */
class Config {
  static port: number = 8000;

  static logLevel: string = "info";

  static morganFormat: string = "tiny";

  static sqlType: "mysql" = "mysql";

  static sqlHost: string = "localhost";

  static sqlPort: number = 3306;

  static sqlUsername: string = "root";

  static sqlPassword: string = "pword";

  static sqlDatabase: string = "test";

  static sqlEntities: Array<typeof User> = [User];

  static sqlSynchronize: boolean = true;

  static sqlLogging: boolean = false;

  static frontendStaticFilesPath: string = path.resolve(__dirname, "../../../frontend/build");
}

class Production extends Config {
  static frontendStaticFilesPath= "/home/node/app/build";
}

class Development extends Config {
  static morganFormat: string = "dev";
}

class Test extends Config {}

export type ConfigType = typeof Production | typeof Development | typeof Test;
const configs: {
  [key: string]: ConfigType;
} = {
  production: Production,
  development: Development,
  test: Test,
};

/**
 * Gets configuration for the correct application environment.
 * @param environment - the name of the environment, i.e. `test`
 * @returns one of the above config classes
 */
export function configByEnvironment(environment: string | undefined): ConfigType {
  return configs[environment || "development"];
}

export const environmentName: string | undefined = process.env.NODE_ENV;
