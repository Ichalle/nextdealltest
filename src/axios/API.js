import axios from "axios";

const URL = "https://dummyjson.com/";

const API = (config) => {
	axios.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      if (!error.response) {
        error.response = {
          data: "net work error",
          status: 500,
        };
      }
      return Promise.reject(error);
    }
  );
  config.baseURL = URL;
  return axios(config);
}

export default API;