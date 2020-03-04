import { promises as fs } from "fs";
// import { resolve } from "path";
import apiUrls from "../src/lib/api_endpoints";
import env from "../src/lib/env";
import { getGithubUserEvents } from "../src/lib/github_api";
import { getUrlPath } from "../src/lib/helpers";

async function main() {
  try {
    const dbFile = env.jsonServerDbFile;
    const routesFile = env.jsonServerRoutesFile;

    const latestUserEvents = await getGithubUserEvents(env.githubUser);

    const githubUserEventsPath = getUrlPath(apiUrls.githubUserEvents("vlazic"));

    const jsonDb = {
      githubUserEventsPath: latestUserEvents
    };

    const jsonRoutes = {
      [githubUserEventsPath]: "/githubUserEventsPath"
    };

    await fs.writeFile(dbFile, JSON.stringify(jsonDb, null, "\t"));
    await fs.writeFile(routesFile, JSON.stringify(jsonRoutes, null, "\t"));

    console.log("json-server cache and routes file is generated");
  } catch (error) {
    console.error(error);
  }
}

(async () => {
  await main();
})();
