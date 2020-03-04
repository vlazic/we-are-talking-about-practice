import axios from "axios";
import { IGithubUserEvent } from "github_user_event";
import apiUrls from "./api_endpoints";

export async function getGithubUserEvents(user: string) {
  let response;
  try {
    response = await axios.get<IGithubUserEvent[]>(
      apiUrls.githubUserEvents(user),
      {
        headers: { Accept: "application/vnd.github.v3.raw+json" }
      }
    );

    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}
