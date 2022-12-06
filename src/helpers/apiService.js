import axios from "axios";
import { urls } from "../config/env-config";
import setAuthHeader from "../utils/setAuthHeader";

export default {
  getEmp: async (path) => {
    return axios.get(`${urls.service}/${path}`);
  },
  deleteEmp: async (path) => {
    return axios.delete(`${urls.service}/${path}`);
  },
  addEmp: async (path, payload) => {
    return axios.post(`${urls.service}/${path}`, payload);
  },
  updateEmp: async (path, payload) => {
    return axios.put(`${urls.service}/${path}`, payload);
  },
  getDept: async (path) => {
    return axios.get(`${urls.service}/${path}`);
  },
  verifyUser: async (path, payload) => {
    const x = axios.post(`${urls.service}/${path}`, payload);

    x.then(function (resp) {
      localStorage.setItem("tokenDetail", resp.data.token);
      setAuthHeader(resp.data.token);
      window.location.reload("/");
    });

    return x;
  },
};
