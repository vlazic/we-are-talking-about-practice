import env from "./env";
import { getUrlPath } from "./helpers";

function jsonServer(strings: TemplateStringsArray, ...keys: string[]) {
  // get parsed value of string
  const parsedUrl = strings
    .map((s, i) => s + (keys[i] !== undefined ? keys[i] : ""))
    .join("");

  // get path part of url
  const path = getUrlPath(parsedUrl);

  // if NODE_ENV is dev, replace host part of url
  // with json-server localhost:PORT value
  return env.nodeEnv === "development" ? env.jsonServerUrl + path : parsedUrl;
}

const apiUrls = {
  githubUserEvents: (user: string) =>
    jsonServer`https://api.github.com/users/${user}/events`
};

export default apiUrls;
