import { Format, TransformableInfo } from "logform";
import winston, { Logger } from "winston";
import { ConsoleTransportInstance } from "winston/lib/winston/transports";

import { configByEnvironment, environmentName } from "./config";

const levels: { [key: string]: number } = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const colors: { [key: string]: string } = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
};
winston.addColors(colors);

const format: Format = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.colorize({ all: true }),
  winston.format.printf((info: TransformableInfo): string => `${info.timestamp} ${info.level}: ${info.message}`)
);

const transports: ConsoleTransportInstance[] = [new winston.transports.Console()];

const logger: Logger = winston.createLogger({
  level: configByEnvironment(environmentName).logLevel,
  levels,
  format,
  transports,
});

export default logger;
