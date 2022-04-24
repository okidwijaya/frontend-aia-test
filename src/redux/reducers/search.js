import { ACTION_STRING } from "../actions/actionString";

const initialState = {
  dataSearch: null,
};

const searchReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case ACTION_STRING.dataSearch:
      const data = action.payload;
      return {
        ...data,
      };
    default:
      return prevState;
  }
};

export default searchReducer;
