import axios from "axios";

export const JGET = async (url, serviceName, config = {}) => {
  try {
    return (
      await axios.get(url, {
        ...config
      })
    ).data;
  } catch (e) {
    console.error(`请求接口‘${serviceName}’报错：`, e);
  }
};
