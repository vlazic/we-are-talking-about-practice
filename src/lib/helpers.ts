import { parse } from "url";
import consts from "./consts";

const getUrlPath = (url: string) => parse(url).path;

const dateYYYYMMDD = (date = new Date()) => date.toJSON().slice(0, 10);

const sum = (a: number, b: number) => a + b;

const secondsToHours = (seconds: number) => seconds / consts.HOUR;

export { getUrlPath, dateYYYYMMDD, sum, secondsToHours };
