import axios from "axios";

export const getImage = (text, perpage, page) => {
  const URL = process.env.REACT_APP_HOST + `/${text}/${perpage}/${page}`;
  return axios.get(URL, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
