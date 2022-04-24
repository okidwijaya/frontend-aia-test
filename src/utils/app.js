import axios from "axios";

const URL = process.env.REACT_APP_HOST;

export const getAll = () => {
  return axios.get(URL, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
