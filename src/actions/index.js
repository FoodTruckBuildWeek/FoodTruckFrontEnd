export const SET_LOCATION = "SET_LOCATION";
export const ADD_NEW_USER = "ADD_NEW_USER";

export const addNewUser = (userInfo) => {
  return { type: ADD_NEW_USER, payload: userInfo };
};
export const setLocation = (location) => {
  return { type: SET_LOCATION, payload: location };
};
