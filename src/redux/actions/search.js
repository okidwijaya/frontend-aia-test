import { ACTION_STRING } from "./actionString";

export const searchText = (data) => {
  return {
    type: ACTION_STRING.dataSearch,
    payload: { data },
  };
};
