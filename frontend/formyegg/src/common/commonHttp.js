import axios from "axios";
import { useEffect } from "react";
import store from "../../store.js"; //

const http = axios.create({
  baseURL: "https://10.0.2.2:8080",
  // process.env 파일로 url저장해서 쓰면 더 좋음! (누가 적용 해주셈)
});

const Interceptor = ({ children }) => {
  useEffect(() => {
    http.interceptors.request.use(
      function (config) {
        config.headers.Authorization = `Bearer ${
          store.getState().member.token
        }`;
        return config;
      },
      function (err) {
        return Promise.reject(err);
      }
    );
    http.interceptors.response.use(
      (response) => {
        return response;
      },
      (err) => {
        // console.log(err);
        // console.log(err.response.data.message);
        alert(err.response.data.message);
      }
    );
  }, []);
  return children;
};

export { Interceptor };
export default http;