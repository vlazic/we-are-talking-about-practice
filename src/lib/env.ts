import { resolve } from "path";

import { config } from "dotenv";

config({ path: resolve(__dirname, "../../.env") });

const env = Object.freeze({
  commitHoursWarning: parseInt(process.env.COMMIT_HOURS_WARNING, 10),
  codingHoursWarning: parseInt(process.env.CODING_HOURS_WARNING, 10),
  githubUser: process.env.GITHUB_USER,
  wakatimeApi: process.env.WAKATIME_API,
  smtpHost: process.env.SMTP_HOST,
  smtpPort: parseInt(process.env.SMTP_PORT, 10),
  smtpUser: process.env.SMTP_USER,
  smtpPass: process.env.SMTP_PASS,
  smtpFromEmail: process.env.SMTP_FROM_EMAIL,
  toEmail: process.env.TO_EMAIL,
  jsonServerDbFile:
    process.env.npm_package_devConfig_json_server_db_file ||
    "json-server-db.json",
  jsonServerRoutesFile:
    process.env.npm_package_devConfig_json_server_routes_file ||
    "json-server-routes.json",
  jsonServerUrl: `http://localhost:${process.env
    .npm_package_devConfig_json_server_port || 8080}`,
  nodeEnv: process.env.NODE_ENV
});

export default env;
