export const ADD_NEW_USER = "ADD_NEW_USER";

export const createNewUser = (userData) => {
  return {
    type: ADD_NEW_USER,
    payload: userData,
  };
};
