import { configure, getLogger } from "log4js";
const logger = getLogger();

configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } }
});
logger.level = "debug";

const eenie = () => getLogger().debug('meenie')

export default eenie
