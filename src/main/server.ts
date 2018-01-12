#!/usr/bin/env node

// TODO move these setting to a better place
import * as checkDefaultEnv from "modules/util";

checkDefaultEnv("ROOT_APPENDER", "JSON_CONSOLE");
checkDefaultEnv("JSON_CONSOLE_PRETTY_PRINT", "false");
checkDefaultEnv("LOG_OUTPUT", "human");
checkDefaultEnv("REFORM_SERVICE_TYPE", "node");
checkDefaultEnv("REFORM_SERVICE_NAME", "document-management-node-demo");
checkDefaultEnv("REFORM_TEAM", "evidence");
checkDefaultEnv("REFORM_ENVIRONMENT", "docker");

import * as logging from "@hmcts/nodejs-logging";
// import * as fs from "fs";
// import * as https from "https";
// import * as path from "path";
import { app } from "./app";

const logger = logging.getLogger("server");

// TODO: set the right port for your application
const port: number = parseInt(process.env.PORT, 10) || 8000;

logger.info("ENV is " + app.locals.ENV);
if (app.locals.ENV === "development") {
  // const sslDirectory = path.join(__dirname, "resources", "localhost-ssl");
  // const sslOptions = {
  //   cert: fs.readFileSync(path.join(sslDirectory, "localhost.crt")),
  //   key: fs.readFileSync(path.join(sslDirectory, "localhost.key")),
  // };
  // const server = https.createServer(sslOptions, app);
  // server.listen(port, () => {
  //   logger.info(`Application started: https://localhost:${port}`);
  // });
  app.listen(port, () => {
    logger.info(`Application started: http://localhost:${port}`);
  });
} else {
  app.listen(port, () => {
    logger.info(`Application started: http://localhost:${port}`);
  });
}
