import { JGET } from "./index";

export const getOption = comp =>
  JGET(`static/mockData/${comp}.json`, `获取‘${comp}’配置项`);
