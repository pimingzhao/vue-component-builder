import axios from "axios";

export const JGET = (url, serviceName, config = {}) => {
  try {
    return axios.get(url, {
      ...config
    });
  } catch (e) {
    console.error(`请求接口‘${serviceName}’报错：`, e);
  }
};
