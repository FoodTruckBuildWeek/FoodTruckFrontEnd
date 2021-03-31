import { ADD_NEW_USER } from "../actions";
const initialState = {
  title: "Welcome to Redux land",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_USER: {
      return state;
    }
    default:
      return state;
  }
};
