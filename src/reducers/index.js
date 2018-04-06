import { LOGIN, LOGOUT } from '../constants/action-types.js';

const rootReducer = (state = {user: {token: 0}}, action) => {
  switch(action.type) {
    case LOGIN:
      console.log("reduce login");
      state.user.token = action.payload.token;
      return state;

    case LOGOUT:
      console.log("reduce logout");
      state.user = {}
      return state;
      
    default:
      console.log("reduce default");
      return state;
  }
};

export default rootReducer;