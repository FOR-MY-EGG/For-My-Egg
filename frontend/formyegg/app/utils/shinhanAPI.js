import axios from "axios";
import { useEffect } from "react";

const shinhanAPI = axios.create({
  baseURL: "https://shbhack.shinhan.com/v1/",
});

shinhanAPI.interceptors.request.use(
    function (config) {
    config.headers["Content-Type"] = "application/json; charset=utf-8"
    return config;
    },
    function (err) {
        return Promise.reject(err);
    }
);
shinhanAPI.interceptors.response.use(
    (response) => {
    return response;
    },
    (err) => {
    // console.log(err);
    // console.log(err.response.data.message);
    return err;
    }
);

export default shinhanAPI;