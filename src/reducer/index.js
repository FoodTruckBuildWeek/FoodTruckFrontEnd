import {
  SET_LOCATION,
  SET_TOKEN,
  SET_ROLE,
  SET_CURRENT_TRUCK_ID,
} from "../actions";

const initialState = {
  role: "",
  token: null,
  title: "Welcome to Redux land",
  capitalize: (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  },
  location: { latitude: 0, longitude: 0 },
  current_truck_id: 0,
  getDistInKm: (loc1, loc2) => {
    const deg2rad = (deg) => {
      return deg * (Math.PI / 180);
    };
    const lat1 = loc1.latitude;
    const lon1 = loc1.longitude;
    const lat2 = loc2.latitude;
    const lon2 = loc2.longitude;
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1); // deg2rad below
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return Math.floor(d);
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case SET_LOCATION:
      return { ...state, location: action.payload };
    case SET_TOKEN:
      console.log(action.payload);
      return {
        ...state,
        token: action.payload,
      };
    case SET_ROLE:
      return {
        ...state,
        role: action.payload,
      };
    case SET_CURRENT_TRUCK_ID:
      return {
        ...state,
        current_truck_id: action.payload,
      };
  }
};
