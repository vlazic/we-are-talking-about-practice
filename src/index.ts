// eslint-disable-next-line @typescript-eslint/no-var-requires
const { WakaTimeClient } = require("wakatime-client");
import { getGithubUserEvents } from "./lib/github_api";
import consts from "./lib/consts";
import env from "./lib/env";
import { dateYYYYMMDD, sum, secondsToHours } from "./lib/helpers";
import { IWakatimeDurations } from "./types/wakatime_durations";
import sendMail from "./lib/send_mail";

async function main() {
  // GITHUB latest commit
  const latestUserEvents = await getGithubUserEvents(env.githubUser);

  const latestUserCommit = latestUserEvents.find(e => e.type === "PushEvent");
  const commitDate = Date.parse(latestUserCommit.created_at);
  const now = new Date().valueOf();

  const hoursSinceLastCommit =
    secondsToHours(now - commitDate) * consts.MILISECONDS;

  // WAKATIME total hours today
  const wakatime = new WakaTimeClient(env.wakatimeApi);
  const { data }: IWakatimeDurations = await wakatime.getMyDurations({
    date: dateYYYYMMDD()
  });
  const hoursToday = secondsToHours(data.map(d => d.duration).reduce(sum, 0));

  // SEND EMAIL
  let message = "";
  if (hoursSinceLastCommit > env.commitHoursWarning) {
    message += `Your latest commit was ${Math.ceil(
      hoursSinceLastCommit
    )} hours ago! You need to commit at least once today!\n`;
  }
  if (hoursToday < env.codingHoursWarning) {
    message += `Your total number of coding hours today is ${Math.floor(
      hoursToday
    )} hours! Your daily goal is ${env.codingHoursWarning}.`;
  }

  if (message !== "") {
    sendMail("Hey! Hurry up!", message);
    console.log("Email was sent!");
  }
}

(async () => {
  await main().catch(console.error);
})();
