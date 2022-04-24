import axios from "axios";

export const getImage = (text, perpage, page) => {
  const URL = `http://localhost:4000/${text}/${perpage}/${page}`;
  return axios.get(URL, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
