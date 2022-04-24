import axios from "axios";

const URL = "http://localhost:4000";

export const getAll = () => {
  return axios.get(URL, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
